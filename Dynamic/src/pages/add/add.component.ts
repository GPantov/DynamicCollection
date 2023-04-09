import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppService} from '../../app/app.service';
import {Observable, Subscription} from 'rxjs';
import * as moment from 'moment';
import {Router} from '@angular/router';

@Component({
  selector: 'add',
  templateUrl: './add.component.html'
})
export class AddComponent implements OnInit, OnDestroy {

  public items = [];
  public visible = false;
  public name = '';
  public note = '';
  public objectName = '';
  public types: Object[] = [];
  public selectedType = {label: '', value: ''};
  public textField = '';
  public manualFields: any[] = [];
  public totalFunctionality = false;
  public listForPrint = false;


  private dataSubs: Subscription = Subscription.EMPTY;
  private data$: Observable<[]>;
  public data: Object[] = [];

  constructor(
    private service: AppService,
    private router: Router,

  ) {
    this.data$ = this.service.getAllData();
  }

  ngOnDestroy(): void {
        this.dataSubs.unsubscribe();
    }
  ngOnInit() {

    this.dataSubs = this.data$.subscribe((x) => {
      this.data = x;
    })


      this.types = [
        {
          label: 'Text',
          value: 'Text',
        },
        {
          label: 'Number',
          value: 'Number',
        },
        {
          label: 'Date',
          value: 'Date',
        },
        {
          label: 'Boolean',
          value: 'Boolean',
        },
        {
          label: 'url',
          value: 'url',
        }
      ]
  }
  addField() {
    this.visible = true;
  }

  submit() {
    let tempObject = {
      name: this.name,
      type: this.selectedType.value,
      value: ''
    }
    this.manualFields = [...this.manualFields,  tempObject];

    this.visible = false;
    this.name = '';
  }
  cancel() {
    this.visible = false;
    this.name = '';
  }
  updateManuelFields(event: any, field: any) {
    if (field.type === 'Text' || field.type === 'Number') {
      field.value = event.target.value;
    } else if (field.type === 'Date'){
      field.value = event;
    } else if (field.type === 'Boolean') {
      field.value = event.checked;
    } else if (field.type === 'url') {
      field.value = event.target.value;
    }
  }
  createObject() {
    const newObject = {
      name: this.objectName,
      note: this.note,
      url: '',
      info: '',
      delete: '',
      totalFunctionality: this.totalFunctionality,
      listForPrint: this.listForPrint,
      manuelFields: this.manualFields
    }
    this.data = [...this.data, newObject];
    this.service.setAllData(this.data);
    this.router.navigate(['']);
  }
  clear() {
    this.objectName = '';
    this.note = '';
    this.manualFields = [];
  }
}
