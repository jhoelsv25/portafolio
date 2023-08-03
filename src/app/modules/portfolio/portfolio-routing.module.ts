import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { StudioComponent } from './pages/studio/studio.component';
import { AbautComponent } from './pages/abaut/abaut.component';
import { ContentComponent } from './layouts/content/content.component';

const routes: Routes = [
  { path:'', component:ContentComponent, title:'Inicio', children:[
    {path:'home', component:HomeComponent, title:'Inicio'},
    { path:'abaut', component:AbautComponent, title:'Sobre mi' },
    { path:'studio', component:StudioComponent, title:'Estudios' },
    { path:'experience', component:ExperienceComponent, title:'Experiecias' },
    { path:'contact', component:ContactComponent, title:'Contacto' },
    { path:'portfolio', component:PortfolioComponent, title:'Portafolio' },
    { path:'**', redirectTo:'home'}
  ] },
  


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
