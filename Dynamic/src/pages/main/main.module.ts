import {NgModule} from '@angular/core';
import {MainComponent} from './main.component';
import {CommonModule} from '@angular/common';
import {DataViewModule} from 'primeng/dataview';


@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    DataViewModule,
  ]
})
export class MainModule {}
