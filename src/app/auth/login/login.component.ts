import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { login } from '../../store/auth.actions';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  public loginForm!:FormGroup
  private store$ = inject(Store)

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    })
  }

  onSubmit(){
    if(this.loginForm.invalid) return

    console.log(this.loginForm.value);
    this.store$.dispatch(login(this.loginForm.value))
    this.loginForm.reset()
    
  }

  
}
