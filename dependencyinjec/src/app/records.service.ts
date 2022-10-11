import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  info1:string[] = ["pavi",'E1234','pop@89.com']
  info2:string[] = ["viki",'E1224','viki@890.com']
  info3:string[] = ["nava",'E1284','nava@8999.com']


  getinfo1():string[]{
    return this.info1
  }
  getinfo2():string[]{
    return this.info2
  }
  getinfo3():string[]{
    return this.info3
  }

  constructor() { }

}
