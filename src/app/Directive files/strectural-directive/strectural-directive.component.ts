import { Component } from '@angular/core';

@Component({
  selector: 'app-strectural-directive',
  templateUrl: './strectural-directive.component.html',
  styleUrl: './strectural-directive.component.scss'
})
export class StrecturalDirectiveComponent {

  isLoggedIn = true;

  items = ['Apple', 'Banana', 'Mango'];

  role = 'admin';
  

}
