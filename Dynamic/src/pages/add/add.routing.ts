import {RouterModule, Routes} from '@angular/router';
import {AddComponent} from './add.component';
import {NgModule} from '@angular/core';


const routes: Routes = [
  {
    path: '',
    component: AddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddRouting {}
