import { Component } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {


  skills:any=[
    {name:'Angular', url:'assets/svg/angular.svg'},
    {name:'JavaScritp', url:'assets/svg/javascript.svg'},
    {name:'TypeScript', url:'assets/svg/typescript.svg'},
    {name:'Docker', url:'assets/svg/docker.svg'},
    {name:'Html', url:'assets/svg/html.svg'},
    {name:'Css', url:'assets/svg/css.svg'},
    {name:'Tailwind', url:'assets/svg/tailwindcss.svg'},
    {name:'Git', url:'assets/svg/git.svg'},
    {name:'Scss', url:'assets/svg/scss.svg'},
    {name:'Bootstrap', url:'assets/svg/bootstrap.svg'},
  ]
}
