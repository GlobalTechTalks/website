import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { HomePageLayoutComponent } from './home-page-layout/home-page-layout.component';
import { HeaderComponent } from './header/header.component';
import { CommunityPartnerComponent } from './community-partner/community-partner.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { TeamComponent } from './team/team.component';
import { FooterComponent } from './footer/footer.component';
import { SponsersComponent } from './sponsers/sponsers.component';
import { UpcomMeetingsComponent } from './upcom-meetings/upcom-meetings.component';
import { ContactComponent } from './contact/contact.component';
import { TopSliderComponent } from './top-slider/top-slider.component';
import { AppRoutingModule } from './/app-routing.module';
import { ShashankComponent } from './shashank/shashank.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageLayoutComponent,
    HeaderComponent,
    CommunityPartnerComponent,
    SubscribeComponent,
    SpeakersComponent,
    TeamComponent,
    FooterComponent,
    SponsersComponent,
    UpcomMeetingsComponent,
    ContactComponent,
    TopSliderComponent,
    ShashankComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,NgbModule,AngularFontAwesomeModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
