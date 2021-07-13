import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent implements OnInit {
 
  public hospitals: any;
  public hospitalForm: any;
	public errorMsg: string;
	public info: string;
    public available_bed: string;
  constructor(private formBuilder: FormBuilder,private apiService: ApiService ) {
    this.hospitals=[];
	this.errorMsg = "";
	this.info="";
    this.hospitalForm=this.formBuilder.group({
      id:'',
      name: '',
      address: '',
      contact_name:'',
      contact_phone:'',
      total_bed:'',
      occupied_bed:'',
      available_bed:''
    });
    this.available_bed = "";
     }
     
  	ngOnInit(){
     this.display();
     
    }

    onSubmit() {
      // Process checkout data here
      console.warn('Your order has been submitted', this.hospitalForm.value);
      // this.hospitalForm.value = {
      //   ...this.hospitalForm.value,
      //   id : this.hospitals.length
      // }

      
     
      this.hospitals.push(this.hospitalForm.value);
      this.update(this.hospitals)
      this.hospitalForm.reset();
      //this.display();
    }    

    display(){
      this.apiService.getHospitals().subscribe((data)=>{
        console.log(data);
		if(!data){
			this.errorMsg = "Something went Wrong!!!";
			setTimeout(()=>{this.errorMsg = "";}, 5000)
		}else{
			
			this.hospitals = data;
		}
      }); //Rest api call
      //Spring mvc - restfull service 
      //controler -rest api usr - return web service
      //service class - validation , business logic - retunr ouput
      //repository/transaction class - database handling return result
    }
    find(){
     /* this.hospitals=[{id:1,name:"sandip",address:"kolaberia"}]
     this.hospitals=this.hospitals.filter((x: { name: any; })=>{
      // console.log(this.hospitalForm.value.name)
       return  this.hospitalForm.value.name===x.name;

     })

    // this.hospitals=[{id:1,address:"kolaberia"}]
     this.hospitals=this.hospitals.filter((x: { address: any; })=>{
      // console.log(this.hospitalForm.value.name)
       return  this.hospitalForm.value.address===x.address;

     })*/

    this.apiService.findHospitals(this.hospitalForm.value).subscribe((data)=>{
	console.log(data);
		if(data.length!=0){
			this.errorMsg = "Something went Wrong!!!";
			setTimeout(()=>{this.errorMsg = "";}, 5000)
		}else{
			
			this.hospitals = data;
		}
        
//     show data save sucessfull message
      });

    }

    update(params:any){
      this.apiService.updateHospitals(params).subscribe((data)=>{
        console.log(data);
//     show data save sucessfull message
		if(!data){
			this.errorMsg = "Something went Wrong!!!";
			setTimeout(()=>{this.errorMsg = "";}, 5000)
		}else{
			this.hospitals = data;
      this.info="Hospital Data Hasbeen Saved Successfully";
			setTimeout(()=>{this.info = "";}, 60000);
		}
        
      });
    }


    updateAvailableBeds(){
        console.log(this.hospitalForm);
        this.available_bed = (this.hospitalForm.value.total_bed - this.hospitalForm.value.occupied_bed) + "";
        console.log(this.available_bed);
    }

   
    

}


