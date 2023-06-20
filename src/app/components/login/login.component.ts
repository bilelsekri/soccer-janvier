import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  errorMsg = ""
  constructor(private formBuilder : FormBuilder
    ,private router :Router
    
    
    ) { }

  ngOnInit() {

    this.loginForm =this.formBuilder.group(
      {
    

        
   
    Email : ["",[Validators.required,Validators.email]],

    pwd : ["",[Validators.required,Validators.minLength(3),Validators.maxLength(8)]],
    
  })

  
  }

  login(){

    console.log("here object" , this.loginForm.value);

    let user =this.loginForm.value;
   
    let users = JSON.parse(localStorage.getItem("users") || "[]");
    let findedUser;

    for (let i = 0; i < users.length; i++) {

      if (users[i].email === user.Email && users[i].pwd === user.pwd) {

        localStorage.setItem("connectedUserId" , users[i].id);

        findedUser =users[i];
        break;
      }}

      if (findedUser) {

        if (findedUser.role == "admin") {
          this.router.navigate(["admin"]);
        }else{

          this.router.navigate([""]);
        }
        
      }else{

        this.errorMsg ="please check Email/pwd";

      }
      
   
      }
      
  }
   
       
    




  
