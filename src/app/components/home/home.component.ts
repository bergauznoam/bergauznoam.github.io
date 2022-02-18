import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { 
  faGithub,
  faTwitter,
  faFacebook,
  faTelegram,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { IContactInfo } from "../../interfaces/IContantInfo";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public contactInfomation: IContactInfo[] = [];
  @Output()
  public readonly scrollToAbout: EventEmitter<void> = new EventEmitter<void>();
  
  public ngOnInit(): void {
    this.contactInfomation = [
      { icon: faGithub, color: "", url: "https://github.com/bergauznoam" },
      { icon: faLinkedin, color: "#0A66C2", url: "https://www.linkedin.com/in/noam-bergauz-4b6ab6115/" },
      { icon: faTwitter, color: "#1DA1F2", url: "https://twitter.com/NBergauz" },
      { icon: faFacebook, color: "#4267B2", url: "https://www.facebook.com/Noam.Bergauz" },
      { icon: faTelegram, color: "#229ED9", url: "https://t.me/noamb17" },
      { icon: faEnvelope, color: "#FFFFFF", url: "mailto:bergauznoam@gmail.com" },
    ]
  }

  public onGetToKnowMeClick(): void {
    this.scrollToAbout.emit();
  }
}
