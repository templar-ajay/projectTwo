import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagethree',
  templateUrl: './pagethree.component.html',
  styles: [
  ]
})
export class PagethreeComponent implements OnInit {

  public var_three : string
  constructor() {
    this.var_three = "I am from Page three Component"
   }

  ngOnInit(): void {
  }

}
