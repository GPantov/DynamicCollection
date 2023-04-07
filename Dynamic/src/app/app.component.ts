import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {Router} from '@angular/router';
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Dynamic';

  public items: MenuItem[];

  public activeItem: MenuItem;

  constructor(
    private router: Router,
    private service: AppService
  ) {
    this.items = [
      {
        label: 'List Of Objects', icon: 'pi pi-fw pi-file', command: () => {
          this.router.navigate(['']);
        }
      },
      {
        label: 'Add New Object', icon: 'pi pi-fw pi-pencil', command: () => {
          this.router.navigate(['add']);
        }
      },
    ];

    this.activeItem = this.items[0];
  }

  ngOnInit(): void {
    const initialData = [
      {
        name: 'Initial Object Name 1',
        note: 'Initial Note 1 ',
        url: 'https://freesvg.org/img/BeagleBros-Apple-IIGS.png',
        info: '',
        delete: '',
        manuelFields: []
      },
      {
        name: 'Initial Object Name 2',
        note: 'Initial Note 2 ',
        url: 'https://www.futurity.org/wp/wp-content/uploads/2022/07/sand-shortage-1600.jpg',
        info: '',
        delete: '',
        manuelFields: []
      },
    ]
    this.service.setAllData(initialData)
  }
}
