import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private auth: AuthenticationService) { }


  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    })
  }

  dataUser = {
    email: '',
    password: ''

  };
  connected: boolean;

  async login() {
    await this.auth.login(this.loginForm.value);
    this.router.navigateByUrl('/formulaire', { replaceUrl: true })
  }
}