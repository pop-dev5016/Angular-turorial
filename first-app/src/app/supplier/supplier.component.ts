import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supplier',
  template: `
    <p class = "custom">
      supplier works!
    </p>
  `,
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
