import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;
  constructor(private auth: AuthenticationService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    })
  }


  async register() {
    await this.auth.login(this.registerForm.value);
    this.router.navigateByUrl('/formulaire', { replaceUrl: true });
  }
}
