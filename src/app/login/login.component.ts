import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule , CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  loginForms!: FormGroup;
  login: boolean = false;
  submitted: boolean = false; 

  ngOnInit(): void {
    this.loginForms = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(): void {
    this.submitted= true;
    if (this.loginForms.valid) {
      console.log(this.loginForms.value);
    }else{
      this.login = false;
    }
  }
}
