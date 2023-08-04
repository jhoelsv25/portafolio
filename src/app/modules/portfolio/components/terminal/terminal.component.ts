import { Component } from '@angular/core';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent {
  codeLines: any[] = [
    {
      name:'selector:', cod:"'app-terminal',"
    },
    {
      name:'template::', cod:"\`<h1>Hello World, Welcome </h1>\`,"
    },
    {
      name:'styleUrls: ', cod:"['./component.css']"
    }

  ];

 
  ngOnInit() {
    
  }

 
}
