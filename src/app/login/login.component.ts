import { Component, OnInit } from '@angular/core';
import {FormBuilder, NgForm} from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public getlogin: any;
  public loginform: any;
  

  constructor(private formBuilder: FormBuilder,private apiService: ApiService) { 
    this.getlogin=[];
    

    this.loginform=this.formBuilder.group({
      id:'',
      name: ''
    });


  }

  ngOnInit(){
    this.display();
  }
  display() {
    throw new Error('Method not implemented.');
  }

  onSubmit() {

  }




  
  }



