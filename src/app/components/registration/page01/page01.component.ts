import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {User} from '../../../model/user';
import {Page01} from '../../../action/registration.actions';

@Component({
  selector: 'app-page01',
  templateUrl: './page01.component.html',
  styleUrls: ['./page01.component.css']
})
export class Page01Component {
  user$: Observable<User>;
  firstName: string;

  constructor(private store: Store<{ user: User }>) {
    this.user$ = store.pipe(select('user'));
  }

  page01() {
    const user = new User();
    user.firstName = this.firstName;
    this.store.dispatch(new Page01(user));
  }
}
