import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styles: [
  ]
})
export class IndexComponent implements OnInit {

  constructor(private _router:Router) {}
    public clickMe(){
      this._router.navigate(['/pagethree'])
    
   }

  ngOnInit(): void {
  }

}
