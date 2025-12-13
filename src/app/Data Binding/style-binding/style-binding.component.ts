import { Component } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrl: './style-binding.component.scss'
})
export class StyleBindingComponent {

  status: boolean = false;

  textColor: string = 'blue';
  color: string = 'red'
  fontSize: string = '15px'


  myStyles = 'color: green; font-size: 24px;';

}
