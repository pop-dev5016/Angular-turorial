import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'binding';
  public name = "pavithran"
  public topic = "data binding"
  public value = ""
  public image = "/assets/pop.png"
  onclick(){
    console.log("u clicked man");
    
  }
  getData(){
    
  }
}
