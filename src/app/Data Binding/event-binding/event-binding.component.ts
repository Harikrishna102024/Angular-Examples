import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.scss'
})
export class EventBindingComponent {

  name: string = '';
  isShow: boolean = false;

  showData() {
    this.isShow = !this.isShow;
    this.name = "Angular"
  }

}
