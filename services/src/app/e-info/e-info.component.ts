import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service"

@Component({
  selector: 'app-e-info',
  templateUrl: './e-info.component.html',
  styleUrls: ['./e-info.component.css'],
  providers:[DataService]
})
export class EInfoComponent implements OnInit {
   infoRecived1:string[]=[]
   infoRecived2:string[]=[]
   infoRecived3:string[]=[]

   getInfoFromServices1(){
    this.infoRecived1=this.dservice.getInfo1()
   }
   getInfoFromServices2(){}
   getInfoFromServices3(){}
  constructor(private dservice: DataService) { }

  ngOnInit(): void {
  }

}
