import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) {}

  startAsStudent() {
    this.router.navigate(['/student-signup']);
  }

  joinAsInstructor() {
    this.router.navigate(['/instructor-signup']);
  }

  joinAsParent() {
    this.router.navigate(['/parent-signup']);
  }
}
