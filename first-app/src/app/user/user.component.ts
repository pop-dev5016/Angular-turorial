import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <p class="custom">
      user works!
    </p>
  `,
  styles: [
    '.custom{color:blue}'
  ]
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
