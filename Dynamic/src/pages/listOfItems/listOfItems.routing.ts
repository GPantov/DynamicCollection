import {RouterModule, Routes} from '@angular/router';
import {ListOfItemsComponent} from './listOfItems.component';
import {NgModule} from '@angular/core';


const routes: Routes = [
  {
    path: '',
    component: ListOfItemsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListOfItemsRouting {}
