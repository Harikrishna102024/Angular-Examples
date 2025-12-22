import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss'
})
export class ReactiveFormsComponent {

  constructor(private fb: FormBuilder) { }

  fbuilder: any;

  ngOnInit() {
    this.formBuilder();
    this.patchVal();
    this.setVal()
  }

  // Form Group
  logIn = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]),
    email: new FormControl('', [Validators.pattern('^[a-z0-9]+@gmail\.(com|org|in)$')])
  })

  // Form Control
  phoneNumber = new FormControl('', [Validators.required])


  // Form Array
  address = new FormArray([
    new FormControl(),
  ])


  // Form Builder
  formBuilder() {
    this.fbuilder = this.fb.group({
      contact: this.fb.control(''),
      places: this.fb.array([[],[],[]])
    })
    return this.fbuilder
  }


  // Adding New filed 
  addAddressField() {
    this.address.push(new FormControl())
  }
  // Removing field
  removeField(index: any) {
    if (this.address.length > 1) {
      this.address.removeAt(index)
    }
  }


  // Submit Form
  submitForm() {
    console.log(this.fbuilder)
  }


  // Patch Value
  patchVal() {
    this.logIn.get('userName')?.patchValue('Harikrishna')
  }
  // Set Value
  setVal() {
    this.logIn.setValue({
      userName: 'HArikrishna',
      password: 'hcbsdh',
      email: 'gcjsdcv'
    })
  }


}
