import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component( {
    selector: 'app-supplier',
    templateUrl: './supplier.component.html',
    styleUrls: ['./supplier.component.css']
} )
export class SupplierComponent implements OnInit {

    public suppliers: any;
    public supplierModel: any;
    public errorMsg: string;
    public info: string;
    public showTable: boolean;
    public products: any;
    constructor(private apiService: ApiService ) {
        this.suppliers = [];
        this.errorMsg = "";
        this.info = "";
        this.supplierModel = {
            id: '',
            name: '',
            address: '',
            contact_name: '',
            contact_phone: '',
            pid: ""
        };
        this.showTable=false;
        this.products=[];
    }

    ngOnInit() {
        this.suppliers = [];
        this.showTable=false;
        this.getProductList();
    }

    onSubmit() {
        // Process checkout data here & form validation
        console.log()
        this.suppliers.push( this.supplierModel );
        this.update( this.suppliers )
    }


    getSupplier() {
        this.apiService.getSupplier().subscribe(( data ) => {
            console.log( data );
            if ( !data ) {
                this.errorMsg = "Something went Wrong!!!";
                setTimeout(() => { this.errorMsg = ""; }, 5000 )
            } else {
                this.suppliers = data;
            }
        } );
    }


    find() {

    }

    update( params: any ) {
        this.apiService.updateSupplier( params ).subscribe(( data ) => {
            console.log( data );
            //     show data save successful message
            if ( !data ) {
                this.errorMsg = "Something went Wrong!!!";
                setTimeout(() => { this.errorMsg = ""; }, 5000 )
            } else {
                this.suppliers= data;
                this.info = "Supplier Data Hasbeen Saved Successfully";
                setTimeout(() => { this.info = ""; }, 60000 );
            }

        } );
    }
    
    getProductList(){
        this.apiService.getProducts().subscribe(( data ) => {
            console.log( data );
            if ( !data ) {
                this.errorMsg = "Something went Wrong!!!";
                setTimeout(() => { this.errorMsg = ""; }, 5000 )
            } else {
                this.products = data;
            }
        } );
    }

}








