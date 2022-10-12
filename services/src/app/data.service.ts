import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {
   info1:string[]=["pavi","5016","pop@mail"]
   info2:string[]=["viki","5017","viki@mail"]
   info3:string[]=["nava","5018","nava@mail"]

   getInfo1():string[]{
    return this.info1
   }
   getInfo2():string[]{
    return this.info2
   }
   getInfo3():string[]{
    return this.info3
   }
  constructor() { }

}
