import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule ,Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule , CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForms!: FormGroup;
  passwordPattern: string = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$";



  ngOnInit(): void {
    this.registerForms = new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.pattern(this.passwordPattern)]),
      confirmpassword: new FormControl('', [Validators.required])
    });
  }

  passwordsMatch(): boolean {
    const password = this.registerForms.get('password')?.value;
    const confirmPassword = this.registerForms.get('confirmpassword')?.value;
    return password === confirmPassword;
  }
  
  onSubmit(): void {
    if (this.registerForms.valid) {
      console.log(this.registerForms.value);
    }
  }
}
