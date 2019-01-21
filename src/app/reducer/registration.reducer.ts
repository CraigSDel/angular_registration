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
      user.cellNumber = action.payload.cellNumber;
      user.lastName = action.payload.lastName;
      user.physicalAddress = action.payload.physicalAddress;
      user.postalAddress = action.payload.postalAddress;
      user.comments = action.payload.comments;
      return user;
    case ActionTypes.Submit:
      return new User();
    default:
      return state;
  }
}
