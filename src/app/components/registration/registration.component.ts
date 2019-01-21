import {Component} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {User} from '../../model/user';
import {MatSnackBar} from '@angular/material';
import {RegistrationSubmitComponent} from './registration-submit/registration-submit.component';
import {Submit} from '../../action/registration.actions';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  user$: Observable<User>;
  selectedIndex: number;
  user: User;

  constructor(private store: Store<{ user: User }>, public snackBar: MatSnackBar) {
    this.user$ = store.pipe(select('user'));
    this.user$.subscribe(user => {
      this.user = user;
    });
    this.selectedIndex = 0;
  }

  page01() {
    this.selectedIndex = 0;
  }

  page02() {
    this.selectedIndex = 1;
  }

  page03() {
    this.selectedIndex = 2;
  }

  submitRegistration() {
    this.snackBar.openFromComponent(RegistrationSubmitComponent, {
      duration: 500,
    });
    this.selectedIndex = 0;
    this.store.dispatch(new Submit(this.user));
  }

  selectedIndexChange(val: number) {
    this.selectedIndex = val;
  }
}
