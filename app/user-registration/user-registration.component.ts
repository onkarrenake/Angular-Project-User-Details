import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WelcomeComponent } from '../welcome/welcome.component';
import { WelcomeService } from '../welcome/welcome.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  image = '';
  firstName = '';
  lastName = '';
  emailId = '';
  mobileNo = '';
  age = '';
  country = '';
  state = '';
  city = '';
  address = '';
  items = [];
  url ;
  constructor(
    private router : Router,
    public loginServeice : WelcomeService) { }
  

  ngOnInit(): void {
    this.url = 'https://www.w3schools.com/w3css/img_avatar3.png';
    this.loginServeice.$isLoggedInData
    .subscribe( (data) => {
      //sessionStorage.setItem("I",data.image);
      sessionStorage.setItem("F",data.firstName);
      sessionStorage.setItem("L",data.lastName);
      sessionStorage.setItem("E",data.emailId);
      sessionStorage.setItem("M",data.mobileNo);
      sessionStorage.setItem("A",data.age);
      sessionStorage.setItem("C",data.country);
      sessionStorage.setItem("S",data.state);
      sessionStorage.setItem("CI",data.city);
      sessionStorage.setItem("ADD",data.address);
    })
  }

  onduty(){
    //this.items = [sessionStorage.getItem("F"),sessionStorage.getItem("E"),sessionStorage.getItem("L")];
    this.url = sessionStorage.getItem("I");
    this.firstName = sessionStorage.getItem("F");
    this.lastName = sessionStorage.getItem("L");
    this.emailId = sessionStorage.getItem("E");
    this.mobileNo = sessionStorage.getItem("M");
    this.age = sessionStorage.getItem("A");
    this.country = sessionStorage.getItem("C");
    this.state = sessionStorage.getItem("S");
    this.city = sessionStorage.getItem("CI");
    this.address = sessionStorage.getItem("ADD");
  }
  offduty(){
    //this.items = [sessionStorage.getItem("F"),sessionStorage.getItem("E"),sessionStorage.getItem("L")];
    this.router.navigate(['\welcome']);
      sessionStorage.removeItem("I");
      sessionStorage.removeItem("F");
      sessionStorage.removeItem("L");
      sessionStorage.removeItem("E");
      sessionStorage.removeItem("M");
      sessionStorage.removeItem("A");
      sessionStorage.removeItem("C");
      sessionStorage.removeItem("S");
      sessionStorage.removeItem("CI");
      sessionStorage.removeItem("ADD");
  }
  name = 'Angular';
  
 onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
       // this.url = event.target.result;
      }
    }
  }
}
