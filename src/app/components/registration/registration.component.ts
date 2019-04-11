import {Component} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {User} from '../../model/user';
import {MatSnackBar} from '@angular/material';
import {SnackbarSubmitComponent} from '../snackbar-submit/snackbar-submit.component';
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

  next() {
    this.selectedIndex = this.selectedIndex + 1;
  }

  back() {
    this.selectedIndex = this.selectedIndex - 1;
  }

  submit() {
    this.snackBar.openFromComponent(SnackbarSubmitComponent, {
      duration: 500,
    });
    this.selectedIndex = 0;
    this.store.dispatch(new Submit(this.user));
  }

  selectedIndexChange(val: number) {
    this.selectedIndex = val;
  }
}
