import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AddModule} from '../pages/add/add.module';
import {TabMenuModule} from 'primeng/tabmenu';
import {CommonModule} from '@angular/common';
import { DataViewModule } from 'primeng/dataview';
import {ListOfItemsModule} from '../pages/listOfItems/listOfItems.module';
import {MainModule} from '../pages/main/main.module';
import {AppService} from './app.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AddModule,
    ListOfItemsModule,
    MainModule,
    TabMenuModule,
    CommonModule,
    DataViewModule
  ],
  exports: [
    DataViewModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
