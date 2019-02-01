import { Component} from '@angular/core';
import {Buttons} from './mock-buttons';

@Component({
  selector: 'app-demo-buttons',
  templateUrl: './demo-buttons.component.html',
  styleUrls: ['./demo-buttons.component.scss']
})
export class DemoButtonsComponent {
  buttons = Buttons;
  constructor() { }
}
