import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'add',
  templateUrl: './add.component.html'
})
export class AddComponent implements OnInit {

  public items = [];
  public visible = false;
  public name = ''
  public note = ''
  public objectName = ''
  public types: Object[] = []
  public selectedType = {label: '', value: ''}
  public textField = '';
  public manualFields: any[] = []

  constructor() {
  }
  ngOnInit() {
      this.types = [
        {
          label: 'Text',
          value: 'Text',
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
    const tempObject = {
      name: this.name,
      type: this.selectedType.value,
      value: ''
    }
    this.manualFields = [...this.manualFields,  tempObject]

    this.visible = false;
    this.name = '';
  }
  cancel() {
    this.visible = false;
    this.name = '';
  }
  updateManuelFields(event: any, field: any) {
    if (field.type === 'Text') {
      field.value = event.target.value;
    } else {
      console.log(event);
    }
  }
  createObject() {
    console.log(this.note, this.objectName, this.manualFields);
  }
  clear() {

  }
}
