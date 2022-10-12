import { Component } from '@angular/core';

@Component({
  selector: 'app-component-form',
  templateUrl: './component-form.component.html',
  styleUrls: ['./component-form.component.css']
})
export class ComponentFormComponent {

  submit(login:any){
    console.log(login);
    
  }
}
