import {Component} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {User} from '../../model/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  user$: Observable<User>;

  constructor(private store: Store<{ user: User }>) {
    this.user$ = store.pipe(select('user'));
  }
}
