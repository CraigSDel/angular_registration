import {Component} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {User} from '../../model/user';
import {MatSnackBar} from '@angular/material';
import {RegistrationSaveComponent} from './registration-save/registration-save.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  user$: Observable<User>;
  selectedIndex: number;

  constructor(private store: Store<{ user: User }>, public snackBar: MatSnackBar) {
    this.user$ = store.pipe(select('user'));
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

  saveRegistration() {
    this.snackBar.openFromComponent(RegistrationSaveComponent, {
      duration: 500,
    });
  }

  selectedIndexChange(val: number) {
    this.selectedIndex = val;
  }
}
