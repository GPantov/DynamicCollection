import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from '../pages/main/main.component';
import {AddComponent} from '../pages/add/add.component';
import {ListOfItemsComponent} from '../pages/listOfItems/listOfItems.component';

const routes: Routes = [
  {
    path: '', component: ListOfItemsComponent,
  },
  {
    path: 'add', component: AddComponent,
  },
  {
    path: 'main', component: MainComponent,
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
