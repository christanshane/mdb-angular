import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.scss']
})
export class UserSignupComponent implements OnInit {
  email: string;
  password: string;
  name: string;

  constructor(public authService: AuthService,
  private router:Router,
  ) {}

  ngOnInit() {
  }

  signup() {
    this.authService.signup(this.email, this.password);
    this.router.navigate(['/login']);
  }

}
