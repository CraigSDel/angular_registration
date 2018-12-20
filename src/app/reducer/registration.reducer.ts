import {Action} from '@ngrx/store';
import {ActionTypes} from '../action/registration.actions';
import {User} from '../model/user';

export const initialUser: User = new User();

export function registrationReducer(state = initialUser, action: Action) {
  switch (action.type) {
    case ActionTypes.Page01:
      return state = new User('Craig');
    case ActionTypes.Page02:
      return state = new User(state.firstName, 'Craig');
    case ActionTypes.Page03:
      return state = new User(state.firstName, state.secondName, 'Craig');
    default:
      return state;
  }
}
