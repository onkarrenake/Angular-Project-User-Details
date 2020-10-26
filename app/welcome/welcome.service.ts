import { EventEmitter, Injectable } from '@angular/core';
import { LoggedInUserEventArgs } from './welcome.component';

@Injectable({
  providedIn: 'root'
})
export class WelcomeService {
  $isLoggedInData = new EventEmitter();
  user: LoggedInUserEventArgs ={
    firstName : "String",
    lastName  : "String" ,
    emailId  : "String",
    mobileNo  : "String",
    age  : "String",
    country : "String",
    state : "String",
    city : "String",
    address  : "String"
  };

  constructor() { }

  userAllDetails(){
    this.user;
  }
  login(firstName,lastName,emailId,mobileNo,age,country,state,city,address)  {
    
    this.user.firstName = firstName;
    this.user.lastName = lastName;
    this.user.emailId = emailId;
    this.user.mobileNo = mobileNo;
    this.user.age = age;
    this.user.country = country;
    this.user.state = state;
    this.user.city = city;
    this.user.address = address;
    
    this.$isLoggedInData.emit(this.user);
  }
}
