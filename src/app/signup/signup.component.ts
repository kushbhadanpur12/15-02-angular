import { Component, OnInit } from '@angular/core';
import {ReactiveFormsModule, Form, FormGroup, FormsModule, Validators , FormControl, Validator } from '@angular/forms';
import { AbstractControl} from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form: FormGroup;
  public isSubmit = false;
  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
        email: new FormControl('', [ Validators.required, Validators.email]),
        username: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
        password_confirm: new FormControl('', Validators.required)
    }, {
      validators: this.MatchPassword
   });
  }
  register(form) {
    this.isSubmit = true;
    if (this.form.valid) {
      const email = form.value.email;
      const username = form.value.username;
      const password = form.value.password;

    const body = {
        username: username,
        password: password,
        email: email
      };
      console.log(body);
      console.log('valid form');
    } else {
      console.log('invalid form');
    }
  }

  MatchPassword(AC: AbstractControl) {
    const pass = AC.get('password').value;
    const cPassword = AC.get('password_confirm').value;
     if (pass !== cPassword) {
         AC.get('password_confirm').setErrors( {MatchPassword: true});
     } else {
         return null;
   }
 }

}
