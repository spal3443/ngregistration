import {
    Component, OnInit
}
from '@angular/core';
import {
    ApiService
}
from '../api.service';@
Component({
    selector: 'app-hospital',
    templateUrl: './hospital.component.html',
    styleUrls: ['./hospital.component.css']
})
export class HospitalComponent implements OnInit {
    public hospitals: any;
    public hospitalModel: any;
    public errorMsg: string;
    public info: string;
    public showTable: boolean;
    constructor(private apiService: ApiService) {
        this.hospitals = [];
        this.errorMsg = "";
        this.info = "";
       this.resetForm();
        this.showTable = false;
    }
    resetForm(){
        this.hospitalModel = {
            id: '',
            name: '',
            address: '',
            contact_name: '',
            contact_phone: '',
            total_bed: 0,
            occupied_bed: 0,
            available_bed: 0
        };
    }
    ngOnInit() {
        this.hospitals = [];
        this.showTable = false;
    }
    onSubmit() {
            //form validation
            this.hospitals.push(this.hospitalModel);
            this.update(this.hospitals);
           // this.resetForm();
            
        }
        
    find() {
        this.apiService.findHospitals(this.hospitalModel).subscribe((data) => {
            console.log(data);
            if(!data.length) {
                this.errorMsg = "Something went Wrong!!!";
                setTimeout(() => {
                    this.errorMsg = "";
                }, 5000)
            } else {
                this.showTable = true;
                this.hospitals = data;
            }
        });
    }
    update(params: any) {
        this.apiService.updateHospitals(params).subscribe((data) => {
            console.log(data);
            //     show data save successfull message
            if(!data) {
                this.errorMsg = "Something went Wrong!!!";
                setTimeout(() => {
                    this.errorMsg = "";
                }, 5000)
            } else {
                this.hospitals = data;
                this.info = "Hospital Data Hasbeen Saved Successfully";
                setTimeout(() => {
                    this.info = "";
                }, 60000);
            }
        });
    }
    updateAvailableBeds() {
        this.hospitalModel.available_bed = this.hospitalModel.total_bed - this.hospitalModel.occupied_bed;
    }
}