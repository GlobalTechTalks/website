import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { SponsersComponent } from './sponsers/sponsers.component';
import { CommunityPartnerComponent } from './community-partner/community-partner.component';
import { TeamComponent } from './team/team.component';
import { UpcomMeetingsComponent } from './upcom-meetings/upcom-meetings.component';
import { HomePageLayoutComponent } from './home-page-layout/home-page-layout.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'sponsers', component: SponsersComponent },
  { path: 'commu', component: CommunityPartnerComponent },
  { path: 'team', component: TeamComponent },
  { path: 'upcom', component: UpcomMeetingsComponent },
  { path: 'home', component: HomePageLayoutComponent },
  { path: 'past', component: SpeakersComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
// export const routingComponents = [ContactComponent]
