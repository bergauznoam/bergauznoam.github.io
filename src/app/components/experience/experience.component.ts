import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  workplaces!: any[];

  constructor() { }

  ngOnInit(): void {
    this.workplaces = [
      {
        workplace: 'Army, Glilot Herzliya', 
        date: 'Nov 2012 - Nov 2015', 
        icon: "assets/idf.svg",
        content: [] 
      },
      { 
        workplace: 'Spectory SoftTech', 
        date: 'Nov 2015 - Jan 2017', 
        icon: "assets/spectory.jpg",
        content: [
          "Developer of Single Page Applications and Hybrid Applications for mobile devices",
          "Initial setup of projects and infra-structures",
          "Lead developer in several projects, especially those that focuses on UI and UX",
          "Agile methodology",
          "Continuous development and maintenance of existing client projects in Production",
          "Continuous work with the client and full participation in the development process"
        ] 
      },
      { 
        workplace: 'Bynet Software Systems, Tel Aviv', 
        date: 'Jan 2017 - Jul 2019 (Out-Source at Visa Cal)', 
        icon: "assets/bynet.png",
        content: [
          "Senior developer and a source of information for other developers.",
          "Conversion of the main financial system of CAL, which was written in COBOL and DeckForms to Angular 5.",
          "Simplification and modernization of the procedural legacy code to object oriented code.",
          "Integration with CRM systems"
        ]
      },
      { 
        workplace: 'CodeOasis LTD, Herzliya', 
        date: 'Jul 2019 - Feb 2021', 
        icon: "assets/codeoasis.png",
        content: [
          "Technology and Infrastructure Leader. Responsible for designing systems from the ground up, picking the right technological solution for the problem.",
          "Team Leader and knowledge source for everything related to Front End and especially Angular, Senior Developer.",
          "Leading projects from major companies like Moovit (Blumfield Project), ClickSoftware (SalesForce) and Superpharm (Internal Systems).",
          "Single All-In-One developer for several projects (Frontend and Backend).",
          "Integration with financial services like CreditGuard",
          "Full project refactors from legacy code to modern technologies (especially PHP backend to NodeJS with NestJS backend)."
        ]
      },
      { 
        workplace: 'Claroty', 
        date: 'Feb 2020 - PRESENT', 
        icon: "assets/claroty.png",
        style: "filter: invert(1);"
      }
    ];
  }

}
