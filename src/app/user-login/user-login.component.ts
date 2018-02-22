import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  email:string;
  password:string;

  constructor(public authService:AuthService) { }

  ngOnInit() {  
  }

  login(){
    this.authService.login(this.email, this.password);
    this.email = this.password = '';
  }

  logout(){
    this.authService.logout();
  }

}
