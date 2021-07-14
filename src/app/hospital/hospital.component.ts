import { formatNumber } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component( {
    selector: 'app-hospital',
    templateUrl: './hospital.component.html',
    styleUrls: ['./hospital.component.css']
} )
export class HospitalComponent implements OnInit {

    public hospitals: any;
    public hospitalForm: any;
    public errorMsg: string;
    public info: string;
    public showTable: boolean;
    constructor(private apiService: ApiService ) {
        this.hospitals = [];
        this.errorMsg = "";
        this.info = "";
        this.hospitalForm = {
            id: '',
            name: '',
            address: '',
            contact_name: '',
            contact_phone: '',
            total_bed: formatNumber,
            occupied_bed: formatNumber,
            available_bed: formatNumber
        } ;
        this.showTable = false;
    }

    ngOnInit() {
        this.hospitals = [];
        this.showTable = false;
    }

    onSubmit() {
        //form validation
        this.hospitals.push(this.hospitalForm.value );
        this.update(this.hospitals )
        this.hospitalForm.reset();
    }

/*    display() {
        this.apiService.getHospitals().subscribe(( data ) => {
            console.log( data );
            if ( !data ) {
                this.errorMsg = "Something went Wrong!!!";
                setTimeout(() => { this.errorMsg = ""; }, 5000 )
            } else {

                this.hospitals = data;
            }
        } ); 
    }*/
    
    find() {
        this.apiService.findHospitals( this.hospitalForm.value ).subscribe(( data ) => {
            console.log( data );
            if ( data.length != 0 ) {
                this.errorMsg = "Something went Wrong!!!";
                setTimeout(() => { this.errorMsg = ""; }, 5000 )
            } else {
                this.showTable = true;
                this.hospitals = data;
            }

        } );

    }

    update( params: any ) {
        this.apiService.updateHospitals( params ).subscribe(( data ) => {
            console.log( data );
            //     show data save successfull message
            if ( !data ) {
                this.errorMsg = "Something went Wrong!!!";
                setTimeout(() => { this.errorMsg = ""; }, 5000 )
            } else {
                this.hospitals = data;
                this.info = "Hospital Data Hasbeen Saved Successfully";
                setTimeout(() => { this.info = ""; }, 60000 );
            }

        } );
    }


    updateAvailableBeds() {
        this.hospitalForm.available_bed = this.hospitalForm.total_bed - this.hospitalForm.occupied_bed;
    }
}


