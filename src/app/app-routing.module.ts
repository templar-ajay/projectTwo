import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageoneComponent } from './pageone/pageone.component';
import { PagethreeComponent } from './pagethree/pagethree.component';
import { PagetwoComponent } from './pagetwo/pagetwo.component';

const routes: Routes = [
  {path:"pageone",component:PageoneComponent},
  {path:"pagetwo",component:PagetwoComponent},
  {path:"pagethree",component:PagethreeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
