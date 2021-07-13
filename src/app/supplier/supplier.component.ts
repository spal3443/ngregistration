import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  public supplier: any;
  public supplierform: any;
  public errorMsg: string;
  public info: string;
  constructor(private formBuilder: FormBuilder,private apiService: ApiService) {
    this.supplier=[];
    this.errorMsg = "";
    this.info="";
    this.supplierform=this.formBuilder.group({
      id:'',
      name: '',
      address: '',
      contact_name:'',
      contact_phone:'',
      pid:''
    });
     }
     
  ngOnInit(){
     
    }

    onSubmit() {
      // Process checkout data here
      console.warn('Your order has been submitted', this.supplierform.value);
      this.supplier.push(this.supplierform.value);
      this.update(this.supplier)
      this.supplierform.reset();
  
  
      // this.insert();
     
     //this.displayambulance();
  
    }    


    displaysupplier(){
      this.apiService.getSupplier().subscribe((data)=>{
        console.log(data);
    if(!data){
      this.errorMsg = "Something went Wrong!!!";
      setTimeout(()=>{this.errorMsg = "";}, 5000)
    }else{
      
      this.supplier = data;
    }
      });
    }

   // insert(){
      //Rest api call
      //Spring mvc - restfull service 
      //controler -rest api usr - return web service
      //service class - validation , business logic - retunr ouput
      //repository/transaction class - database handling return result
   // }


   find(){
    this.supplier=[{id:1,name:"sandip",address:"kolaberia"}]
   this.supplier=this.supplier.filter((x: { name: any; })=>{
    // console.log(this.hospitalform.value.name)
     return  this.supplierform.value.name===x.name;
  
   })
  
  // this.suppliers=[{id:1,address:"kolaberia"}]
   this.supplier=this.supplier.filter((x: { address: any; })=>{
    // console.log(this.hospitalform.value.name)
     return  this.supplierform.value.address===x.address;
  
   })
  }

  update(params:any){
    this.apiService.updateSupplier(params).subscribe((data)=>{
      console.log(data);
  //     show data save sucessfull message
  if(!data){
    this.errorMsg = "Something went Wrong!!!";
    setTimeout(()=>{this.errorMsg = "";}, 5000)
  }else{
    this.supplier = data;
    this.info="Supplier Data Hasbeen Saved Successfully";
    setTimeout(()=>{this.info = "";}, 60000);
  }
      
    });



  }

}

    






