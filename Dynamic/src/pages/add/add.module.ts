import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddComponent} from './add.component';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import {CardModule} from 'primeng/card';
import {CalendarModule} from 'primeng/calendar';
import {InputNumberModule} from 'primeng/inputnumber';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {DividerModule} from 'primeng/divider';
import {AppService} from '../../app/app.service';


@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    DialogModule,
    BrowserAnimationsModule,
    InputTextModule,
    FormsModule,
    DropdownModule,
    CardModule,
    CalendarModule,
    InputNumberModule,
    ToggleButtonModule,
    DividerModule,
  ],
  exports: [
    AddComponent,
  ],
  declarations: [
    AddComponent,
  ],
  providers: [
    AppService
  ]
})
export class AddModule {}
