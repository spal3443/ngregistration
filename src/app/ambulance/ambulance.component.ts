import {
  Component, OnInit
}
from '@angular/core';
import {
  ApiService
}
from '../api.service';@

Component({
  selector: 'app-ambulance',
  templateUrl: './ambulance.component.html',
  styleUrls: ['./ambulance.component.css']
})
export class AmbulanceComponent implements OnInit {
  public ambulance: any;
  public ambulanceModel: any;
  public errorMsg: string;
  public info: string;
  public showTable: boolean;
  constructor(private apiService: ApiService) { 
    this.ambulance=[];
    this.errorMsg = "";
	  this.info="";
    this.ambulanceModel = {
      id: '',
      name: '',
      address: '',
      contact_name: '',
      contact_phone: ''
      
    };
    this.showTable = false;
  }

  ngOnInit(){
    this.ambulance = [];
    this.showTable = false;
  }

  onSubmit() {
    // Process checkout data here
    console.log()
    this.ambulance.push(this.ambulanceModel);
    this.update(this.ambulance)
    // this.insert();
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
   return  this.ambulanceModel.value.name===x.name;

 })

// this.hospitals=[{id:1,address:"kolaberia"}]
 this.ambulance=this.ambulance.filter((x: { address: any; })=>{
  // console.log(this.hospitalform.value.name)
   return  this.ambulanceModel.value.address===x.address;

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