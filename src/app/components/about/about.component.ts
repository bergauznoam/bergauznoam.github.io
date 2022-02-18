import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  constructor(
    private readonly elementRef: ElementRef
  ) { }

  public scrollIntoView(): void {
    const nativeElement: HTMLElement = this.elementRef.nativeElement
    nativeElement.scrollIntoView({behavior: "smooth"});
  }
}
