import { CommonModule } from '@angular/common';
import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  form = this.formBuilder.group({
    email: ['',[Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}
  onSubmit() {
    if(this.form.invalid) return 
    this.authService.login(this.form.value as any).subscribe((user) => {
      localStorage.setItem('user', JSON.stringify(user));
      alert('Đăng nhập thành công')
      this.router.navigateByUrl('/');
    });
  }
}
