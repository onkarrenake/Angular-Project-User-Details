import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRegistrationComponent } from '../user-registration/user-registration.component';
import { WelcomeService } from './welcome.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(
    //public userData : UserRegistrationComponent,
    private service : WelcomeService,
    private router : Router
  ) { }

  firstName = '';
  lastName = '';
  emailId = '';
  mobileNo = '';
  age = '';
  country = '';
  state = '';
  city = '';
  address = '';
  url ;
  ngOnInit(): void {
    //this.userData.userDetails(this.image,this.firstName,this.lastName,this.emailId,this.mobileNo,this.age,this.country,this.state,this.city,this.address);
    this.url = 'https://www.w3schools.com/w3css/img_avatar3.png';
  }
  name = 'Angular 4';
  
  onSelectFile(event) {
   
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
        sessionStorage.setItem("I",this.url);
      }
    }
  }

  handleUserData(){
    this.service.login(this.firstName,this.lastName,this.emailId,this.mobileNo,this.age,this.country,this.state,this.city,this.address);
    this.router.navigate(['userRegistration']);
  }
}
export interface LoggedInUserEventArgs{
  firstName : "String";
  lastName  : "String" ;
  emailId  : "String";
  mobileNo  : "String";
  age  : "String";
  country : "String";
  state : "String";
  city : "String";
  address  : "String";
}


