import { Component, ElementRef, ViewChild } from '@angular/core';
import { faAngular } from "@fortawesome/free-brands-svg-icons";
import { AboutComponent } from './components/about/about.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public readonly faAngular = faAngular;

  @ViewChild(AboutComponent) 
  private readonly aboutComponent!: AboutComponent;


  public scrollToAbout(): void {
    this.aboutComponent.scrollIntoView();
  }
}
