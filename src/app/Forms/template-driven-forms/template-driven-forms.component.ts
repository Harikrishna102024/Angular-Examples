import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrl: './template-driven-forms.component.scss'
})
export class TemplateDrivenFormsComponent {
  userName: any;
  password: any;
  country: any;
  state: any;
  city: any;
  village: any;



  submitForm(formData: any, addr: any, un: any) {
    console.log(formData)
    console.log(addr)
    console.log(un)

  }

}
