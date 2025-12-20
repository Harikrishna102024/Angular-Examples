import { Component } from '@angular/core';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss'
})
export class ReactiveFormsComponent {


  userName: any;
  password: any;
  country: any;
  state: any;
  city: any;
  village: any;

  submitForm(formData: any, addr: any, un: any) {
    console.log(formData)
    console.log(addr)
  }

}
