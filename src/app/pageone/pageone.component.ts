import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pageone',
  templateUrl: './pageone.component.html',
  styles: [
  ]
})
export class PageoneComponent implements OnInit {

  public var_one : string
  public var_param:string
  constructor(private _route:ActivatedRoute) {
    this.var_one = "I am from Page one Component"
    this.var_param = this._route.snapshot.params['eid']+"..."+
                     this._route.snapshot.params['ename']+"..."+
                     this._route.snapshot.params['esal']
   }

  ngOnInit(): void {
  }

}
