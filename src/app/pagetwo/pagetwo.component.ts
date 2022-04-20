import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagetwo',
  templateUrl: './pagetwo.component.html',
  styles: [
  ]
})
export class PagetwoComponent implements OnInit {

  public var_two : string
  public var_param:string
  constructor(private _route:ActivatedRoute) {
    this.var_two = "I am from Page two Component"
    this.var_param = this._route.snapshot.params['eid']+"..."+
    this._route.snapshot.params['ename']+"..."+
    this._route.snapshot.params['esal']
   }

  ngOnInit(): void {
  }

}
