import {ActionTypes, UserAction} from '../action/registration.actions';
import {User} from '../model/user';

export const initialUser: User = new User();

export function registrationReducer(state = initialUser, action: UserAction<User>) {
  switch (action.type) {
    case ActionTypes.Page01:
      return new User(action.payload.firstName, state.secondName, state.lastName);
    case ActionTypes.Page02:
      return new User(state.firstName, action.payload.secondName, state.lastName);
    case ActionTypes.Page03:
      return new User(state.firstName, state.secondName, action.payload.lastName);
    default:
      return state;
  }
}
