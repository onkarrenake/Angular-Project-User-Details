import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'example@gmail.com'
  password = 'enter password here'
  msg = 'Login Here....!'
  inValiedLogin = false
  welcome = ''
  constructor(private router : Router,
    ) { }
//public auth:AuthenticationLoginService
  ngOnInit(): void {
  }

  handleLogin(){
    console.log(this.username);
    console.log(this.password);
    if(this.username === 'onkar@gmail.com' && this.password === '123123'){
    //if(this.auth.authentication(this.username,this.password)){
      console.log('welcome to placement');
      this.inValiedLogin = false;
      //this.router.navigate([this.welcome,this.username]);
      this.router.navigate(['welcome']);
    }else{
      this.inValiedLogin = true;
    }
  }
}
