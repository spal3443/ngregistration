import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 

  constructor(private httpClient: HttpClient) { }

  public getHospitals(): Observable <any>{
    var httpurl="http://localhost:7575/covidapp/getHospitalList"
    // var httpurl="https://jsonplaceholder.typicode.com/todos/1"
    var HttpParams={};
    return this.httpClient.get(httpurl);
    
  }
  
 updateHospitals(params: any): Observable <any> {
    try{
    
      var httpurl="http://localhost:7575/covidapp/saveHospitalDtls"
    //var HttpParams={};
     return this.httpClient.post(httpurl,params);
    }
    catch{
      throw new Error('Error in update hospital method.');
    }
  
  }

	findHospitals(params: any): Observable <any> {
    try{
      
      var httpurl="http://localhost:8081/CovidCentralApp/findHospitals"
    //var HttpParams={};
     return this.httpClient.post(httpurl,params);
    }
    catch{
      throw new Error('Error in update hospital method.');
    }
  
  }

  public getSupplier(): Observable <any>{
     var httpurl="http://localhost:7575/covidapp/getSupplierList"
    // var httpurl="https://jsonplaceholder.typicode.com/todos/1"
     var HttpParams={};
   return this.httpClient.get(httpurl);
     
   }
   

   updateSupplier(params: any): Observable <any> {
    try{
      
    var httpurl="http://localhost:7575/covidapp/saveSupplierDtls"
    //var HttpParams={};
     return this.httpClient.post(httpurl,params);
    }
    catch{
      throw new Error('Error in update supplier method.');
    }
   }

   public getAmbulance(): Observable <any>{
    var httpurl="http://localhost:7575/covidapp/getAmbulanceList"
    //var httpurl="https://jsonplaceholder.typicode.com/todos/1"
    var HttpParams={};
    return this.httpClient.get(httpurl);
    
  }
  
  updateAmbulance(params: any): Observable <any> {
    try{
    
      var httpurl="http://localhost:7575/covidapp/saveAmbulanceDtls"
    //var HttpParams={};
     return this.httpClient.post(httpurl,params);
    }
    catch{
      throw new Error('Error in update ambulance method.');
    }
    
  
  }
  }