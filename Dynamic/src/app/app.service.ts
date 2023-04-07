import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable()
export class AppService {
  private allData: BehaviorSubject<any>;
  readonly allData$: Observable<[]>;

  constructor() {
    this.allData = new BehaviorSubject<Object>([]);
    this.allData$ = this.allData.asObservable();
  }

  getAllData(): Observable<[]> {
    return this.allData$;
  }
  setAllData(data: any) {
    this.allData.next(data);
  }

}
