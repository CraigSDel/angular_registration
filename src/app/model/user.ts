import {Address} from './address';

export class User {

  id: number;
  version: number;
  firstName: string;
  lastName: string;
  physicalAddress: Address;
  postalAddress: Address;
  comments: string;
}
