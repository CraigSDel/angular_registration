import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {User} from '../../../model/user';
import {Page03} from '../../../action/registration.actions';

@Component({
  selector: 'app-page03',
  templateUrl: './page03.component.html',
  styleUrls: ['./page03.component.css']
})
export class Page03Component {
  user$: Observable<User>;
  lastName: string;

  constructor(private store: Store<{ user: User }>) {
    this.user$ = store.pipe(select('user'));
  }

  page03() {
    const user = new User();
    user.lastName = this.lastName;
    this.store.dispatch(new Page03(user));
  }
}
