import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { ContentComponent } from './layouts/content/content.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { StudioComponent } from './pages/studio/studio.component';
import { AbautComponent } from './pages/abaut/abaut.component';
import { ServicesComponent } from './pages/services/services.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SkillComponent } from './pages/skill/skill.component';
import { ZorroModule } from 'src/app/shared/zorro.module';
import { TerminalComponent } from './components/terminal/terminal.component';
import { ViewComponent } from './components/view/view.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    HomeComponent,
    ContactComponent,
    PortfolioComponent,
    ExperienceComponent,
    StudioComponent,
    AbautComponent,
    ServicesComponent,
    HomePageComponent,
    SkillComponent,
    TerminalComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    ZorroModule
  ]
})
export class PortfolioModule { }
