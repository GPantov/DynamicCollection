import {Component, OnInit} from '@angular/core';
import {AppService} from '../../app/app.service';


@Component({
  selector: 'list',
  templateUrl: './listOfItems.component.html'
})
export class ListOfItemsComponent implements OnInit {

  public products: Object[] = []
  public cols: any[] = [];
  public selectedRow: any = {};

  public visible = false;
  public Object = Object;

  constructor(private service: AppService) {
  }
  ngOnInit(): void {
    this.cols = [
      { field: 'url', header: 'Picture' },
      { field: 'name', header: 'Name' },
      { field: 'note', header: 'Note' },
      { field: 'info', header: 'View Object' },
      { field: 'delete', header: 'Delete Object' },
    ];
    this.service.getAllData().subscribe((x) => {
      this.products = x;
    })
  }

  checkItem(rowData: Object) {
    this.visible = true;
    this.selectedRow = rowData;
  }
  removeItem(rowData: Object) {
    console.log(rowData)
  }
  close() {
    this.visible = false;
  }
  submit() {
    console.log(this.selectedRow)
  }
  updateManuelFields(event: any, field: any) {
    if (field.type === 'Text') {
      field.value = event.target.value;
    } else if (field.type === 'Date'){
      field.value = event;
    } else if (field.type === 'Boolean') {
      field.value = event.checked;
    } else if (field.type === 'url') {
      field.value = event.target.value;
    }
  }
}
