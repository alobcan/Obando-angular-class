import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPenPen]'
})
export class PenPenDirective {

  constructor(private element: ElementRef) { }

  @HostListener('mouseenter')
  publicconMouseEnter(){
    this.element.nativeElement.style.backgroundColor = "green";
  }

  @HostListener('mouseleave')
  publiconMouseLeave(){
    this.element.nativeElement.style.backgroundColor = "white";
  }

}
