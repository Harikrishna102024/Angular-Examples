import { Component, Input } from '@angular/core';
import { AuthGuardService } from '../../Services/auth-guard.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  constructor(private authService: AuthGuardService) { }

  ngOnInit() {
    this.register();
  }

  register() {
    this.authService.isRegistered = true;
  }

 

}
