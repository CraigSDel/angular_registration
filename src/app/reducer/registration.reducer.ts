import {Action} from '@ngrx/store';
import {ActionTypes} from '../action/registration.actions';
import {User} from '../model/user';

export function registrationReducer(state = User, action: Action) {
  switch (action.type) {
    case ActionTypes.PageO1:
      return state;
    case ActionTypes.PageO2:
      return state;
    case ActionTypes.PageO3:
      return state;
    default:
      return state;
  }
}
