import {Input, Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent   {
  @Input() tooltipId: string;
  @Input() tooltipText: string;
  private isActive: boolean;
  constructor(public el: ElementRef) { }

  show() {
    this.isActive = true;
  }

  hide() {
    this.isActive = false;
  }
  // listen to esc key press
  @HostListener('document:keydown', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.isActive = false;
    }
  }

  // listen for anywhere click event
  @HostListener('document:click', ['$event'])
  onClickOutsideButton(event) {
    if (this.isActive) {
      // hide tooltip if click event occured outside button with open tooltip
      if ( !this.el.nativeElement.contains(event.target) && event.srcElement.id !== this.tooltipId) {
        this.hide();
      }
    }
  }



}
