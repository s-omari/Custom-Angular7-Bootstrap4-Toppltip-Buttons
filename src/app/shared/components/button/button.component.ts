import {  Component, OnInit, Input, ViewChild , ElementRef, HostListener} from '@angular/core';

  import { TooltipComponent } from '../tooltip/tooltip.component';
  import { Button } from '../../../shared/models/button';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() button: Button;
  @ViewChild(TooltipComponent) private tooltipComponent: TooltipComponent;
  tooltipId: string;
  tooltipBottomPosition: Boolean = false;

  constructor(public el: ElementRef) { }

  ngOnInit() {
    this.tooltipId = 'btn' + this.button.id;
  }

  showTooltip() {
    this.tooltipComponent.show();
  }

  // listen for window scroll event
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const topWindowPosition = this.el.nativeElement.getBoundingClientRect().top;
    this.tooltipBottomPosition = topWindowPosition <= 0;
  }

  }

