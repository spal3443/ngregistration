import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-ambulance',
  templateUrl: './ambulance.component.html',
  styleUrls: ['./ambulance.component.css']
})
export class AmbulanceComponent implements OnInit {
  public ambulance: any;
  public ambulanceform: any;
  public errorMsg: string;
  public info: string;
  constructor(private formBuilder: FormBuilder,private apiService: ApiService) { 
    this.ambulance=[];
    this.errorMsg = "";
	this.info="";
    this.ambulanceform=this.formBuilder.group({
      id:'',
      name: '',
      address: '',
      contact_name:'',
      contact_phone:'',
      
    });
  }

  ngOnInit(){
  }

  onSubmit() {
    // Process checkout data here
    console.warn('Your order has been submitted', this.ambulanceform.value);
    this.ambulance.push(this.ambulanceform.value);
    this.update(this.ambulance)
    this.ambulanceform.reset();


    // this.insert();
   
   //this.displayambulance();

  }    
displayambulance(){
  this.apiService.getAmbulance().subscribe((data)=>{
    console.log(data);
if(!data){
  this.errorMsg = "Something went Wrong!!!";
  setTimeout(()=>{this.errorMsg = "";}, 5000)
}else{
  
  this.ambulance = data;
}
  });
}


find(){
  this.ambulance=[{id:1,name:"sandip",address:"kolaberia"}]
 this.ambulance=this.ambulance.filter((x: { name: any; })=>{
  // console.log(this.hospitalform.value.name)
   return  this.ambulanceform.value.name===x.name;

 })

// this.hospitals=[{id:1,address:"kolaberia"}]
 this.ambulance=this.ambulance.filter((x: { address: any; })=>{
  // console.log(this.hospitalform.value.name)
   return  this.ambulanceform.value.address===x.address;

 })
}



update(params:any){
  this.apiService.updateAmbulance(params).subscribe((data)=>{
    console.log(data);
//     show data save sucessfull message
if(!data){
  this.errorMsg = "Something went Wrong!!!";
  setTimeout(()=>{this.errorMsg = "";}, 5000)
}else{
  this.ambulance = data;
  this.info="Ambulance Data Hasbeen Saved Successfully";
  setTimeout(()=>{this.info = "";}, 60000);
}
    
  });
}

  

}