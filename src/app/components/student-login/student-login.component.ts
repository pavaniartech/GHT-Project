import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrl: './student-login.component.css'
})
export class StudentLoginComponent {
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) { }

  onSubmit() {
    const loginPayload = { email: this.email, password: this.password };
    this.http.post('http://localhost:8080/api/login', loginPayload)
      .subscribe(response => {
        // Handle response here (e.g., save token and navigate)
        console.log('Login successful', response);
        this.router.navigate(['/dashboard']);
      }, error => {
        console.error('Login failed', error);
      });
  }
}
