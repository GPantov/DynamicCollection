import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListOfItemsComponent} from './listOfItems.component';
import {DataViewModule} from 'primeng/dataview';
import {TableModule} from 'primeng/table';
import {AppService} from '../../app/app.service';
import {ButtonModule} from 'primeng/button';
import {SingleItemComponent} from './components/singleItem/singleItem.component';
import {DialogModule} from 'primeng/dialog';
import {DividerModule} from 'primeng/divider';
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {CalendarModule} from 'primeng/calendar';



@NgModule({
  imports: [
    CommonModule,
    DataViewModule,
    TableModule,
    ButtonModule,
    DialogModule,
    DividerModule,
    InputTextModule,
    FormsModule,
    ToggleButtonModule,
    CalendarModule,
  ],
  exports: [
    ListOfItemsComponent,
    SingleItemComponent
  ],
  declarations: [
    ListOfItemsComponent,
    SingleItemComponent
  ],
  providers: [
    AppService
  ]
})
export class ListOfItemsModule {}


