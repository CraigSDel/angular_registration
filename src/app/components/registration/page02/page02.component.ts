import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {User} from '../../../model/user';
import {Page02} from '../../../action/registration.actions';

@Component({
  selector: 'app-page02',
  templateUrl: './page02.component.html',
  styleUrls: ['./page02.component.css']
})
export class Page02Component {
  user$: Observable<User>;
  user: User;

  constructor(private store: Store<{ user: User }>) {
    this.user$ = store.pipe(select('user'));
    this.user$.subscribe(user => {
      this.user = user;
    });
  }
}
