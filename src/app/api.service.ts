import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable( {
    providedIn: 'root'
} )
export class ApiService {


    constructor( private httpClient: HttpClient ) { }

    public getHospitals(): Observable<any> {
        try {
            var httpurl = "http://localhost:7575/covidapp/getHospitalList"
            var HttpParams = {};
            return this.httpClient.get( httpurl );
        }
        catch{
            throw new Error( 'Error in update hospital method.' );
        }
    }

    public updateHospitals( params: any ): Observable<any> {
        try {
            var httpurl = "http://localhost:7575/covidapp/saveHospitalDtls"
            return this.httpClient.post( httpurl, params );
        }
        catch{
            throw new Error( 'Error in update hospital method.' );
        }

    }

    public findHospitals( params: any ): Observable<any> {
        try {

            var httpurl = "http://localhost:7575/CovidCentralApp/findHospitals"
            //var HttpParams={};
            return this.httpClient.post( httpurl, params );
        }
        catch{
            throw new Error( 'Error in update hospital method.' );
        }

    }

    public getSupplier(): Observable<any> {
        var httpurl = "http://localhost:7575/covidapp/getSupplierList"
        // var httpurl="https://jsonplaceholder.typicode.com/todos/1"
        var HttpParams = {};
        return this.httpClient.get( httpurl );

    }


    public updateSupplier( params: any ): Observable<any> {
        try {

            var httpurl = "http://localhost:7575/covidapp/saveSupplierDtls"
            //var HttpParams={};
            return this.httpClient.post( httpurl, params );
        }
        catch{
            throw new Error( 'Error in update supplier method.' );
        }
    }

    public getAmbulance(): Observable<any> {
        var httpurl = "http://localhost:7575/covidapp/getAmbulanceList"
        //var httpurl="https://jsonplaceholder.typicode.com/todos/1"
        var HttpParams = {};
        return this.httpClient.get( httpurl );

    }

    public updateAmbulance( params: any ): Observable<any> {
        try {

            var httpurl = "http://localhost:7575/covidapp/saveAmbulanceDtls"
            //var HttpParams={};
            return this.httpClient.post( httpurl, params );
        }
        catch{
            throw new Error( 'Error in update ambulance method.' );
        }
    }

    public getProducts(): Observable<any> {
        var httpurl = "http://localhost:7575/covidapp/getProductList"
        // var httpurl="https://jsonplaceholder.typicode.com/todos/1"
        var HttpParams = {};
        return this.httpClient.get( httpurl );
    }
  }