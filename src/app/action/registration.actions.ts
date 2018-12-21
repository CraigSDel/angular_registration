import {Action} from '@ngrx/store';
import {User} from '../model/user';

export enum ActionTypes {
  Page01 = '[Registration Component] Page01',
  Page02 = '[Registration Component] Page02',
  Page03 = '[Registration Component] Page03',
}

export interface UserAction<T> extends Action {
  type: string;
  payload: T;
}

export class Page01 implements UserAction<User> {
  readonly type = ActionTypes.Page01;
  readonly payload: User;

  constructor(payload: User) {
    this.payload = payload;
  }
}

export class Page02 implements UserAction<User> {
  readonly type = ActionTypes.Page02;
  readonly payload: User;

  constructor(payload: User) {
    this.payload = payload;
  }
}

export class Page03 implements UserAction<User> {
  readonly type = ActionTypes.Page03;
  readonly payload: User;

  constructor(payload: User) {
    this.payload = payload;
  }
}
