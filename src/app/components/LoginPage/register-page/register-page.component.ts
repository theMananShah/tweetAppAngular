import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/service/user-service.service';
import { Users } from 'src/app/model/Users';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  firstName!: string;
  lastName!: string;
  email !: string;
  userId !: string;
  password !: string;
  confirmPassword!: string;
  contactNumber !: string;
  dob!: string
  gender!: string
  usersList: Users[] = [];
  validForm: boolean = true;
  isEmail: boolean = false;
  isUserName: boolean = false;
  isPassword: boolean = false;
  errorMessage: any;
  currentStatus!: String;
  res: any;
  constructor(private router: Router, private userService: UserServiceService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((data) => {
      this.res = data;
      this.usersList = this.res.data.slice();
    })

  }
  register() {
    let user = new Users(this.firstName, this.lastName, this.email, "3", this.dob, this.password, this.gender);
    console.log(user);
    this.userService.registserUser(user).subscribe(data => {
      this.res = data;
      // console.log(this.res);
    });
    this.router.navigate(['/login']);

  }
  onCheckUserName() {

  }
  onKeyEmail() {
    this.isEmail = false;
    this.validForm = true;
    for (let i = 0; i < this.usersList.length; i++) {
      if (this.usersList[i].emailId === this.email) {
        this.isEmail = true;
        this.validForm = false;
      }
    }
  }
  onpass() {
    if (this.password != null) {
      this.onCheckPassword()
    }

  }
  onCheckPassword() {
    this.validForm = true;
    this.isPassword = false;
    if (this.password != this.confirmPassword) {
      this.isPassword = true;
      this.validForm = false;
    }
  }

}
