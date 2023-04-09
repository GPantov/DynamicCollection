import {Component, OnInit} from '@angular/core';
import {AppService} from '../../app/app.service';


@Component({
  selector: 'list',
  templateUrl: './listOfItems.component.html'
})
export class ListOfItemsComponent implements OnInit {

  public products: Object[] = [];
  public cols: any[] = [];
  public selectedRow: any = {};
  public selectedRows: any[] = [];
  public selectedList: any[] = [];
  public selectedHeader: any[] = [];
  public totalOptions: any[] = [];
  public total = 0;
  public addText = '';

  public visible = false;
  public displayTotal = false;
  public displayFieldsForDisplay = false;
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
  showTotal() {
      this.total = 0;
      this.displayTotal = true;
      this.totalOptions = this.selectedRow['manuelFields'].filter((x) => x.type === 'Number');
  }
  addTotal() {
   this.selectedRows.forEach((x) => {
      this.total += +x.value;
    })
   this.displayTotal = false;
  }
  displayFieldsForPick() {
    this.displayFieldsForDisplay = true;
  }
  createFile() {
    let oData: Object[] = [];

    this.selectedHeader.forEach((x) => {
      let tempObj = {
        [x.name]:  x.value,
      };
      oData = [...oData, tempObj]
    });
    this.selectedList.forEach((x) => {
      let tempObj = {
        [x.name]:  x.value,
      };
      oData = [...oData, tempObj]
    });
    oData = [...oData, this.addText]

    this.saveText(JSON.stringify(oData));
  }


  saveText(text): void {
    let a = document.createElement('a');
    a.setAttribute('href', `data:text/plain;charset=utf-u,${encodeURIComponent(text)}`);
    a.setAttribute('download', this.selectedRow.name + '.txt');
    a.click();
    this.selectedList = [];
    this.selectedHeader = [];
    this.addText = '';
    this.displayFieldsForDisplay = false;
  }
}
