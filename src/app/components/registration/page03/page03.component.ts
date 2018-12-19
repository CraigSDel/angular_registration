import {Component} from '@angular/core';
import {Reset} from '../../../action/counter.actions';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';

@Component({
  selector: 'app-page03',
  templateUrl: './page03.component.html',
  styleUrls: ['./page03.component.css']
})
export class Page03Component {
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select('count'));
  }

  reset() {
    this.store.dispatch(new Reset());
  }
}
