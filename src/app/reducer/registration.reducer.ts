import {ActionTypes, UserAction} from '../action/registration.actions';
import {User} from '../model/user';

export const initialUser: User = new User();

export function registrationReducer(state = initialUser, action: UserAction<User>) {
  switch (action.type) {
    case ActionTypes.Page01:
    case ActionTypes.Page02:
    case ActionTypes.Page03:
      const user = new User();
      user.firstName = action.payload.firstName;
      user.secondName = action.payload.secondName;
      user.lastName = action.payload.lastName;
      user.addressOne = action.payload.addressOne;
      user.addressTwo = action.payload.addressTwo;
      user.comment = action.payload.comment;
      return user;
    default:
      return state;
  }
}
