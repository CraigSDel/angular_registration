import {Component} from '@angular/core';
import {Increment} from '../../../action/counter.actions';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';

@Component({
  selector: 'app-page01',
  templateUrl: './page01.component.html',
  styleUrls: ['./page01.component.css']
})
export class Page01Component {
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select('count'));
  }

  next() {
    console.log('Hello there');
  }

  increment() {
    this.store.dispatch(new Increment());
  }
}
