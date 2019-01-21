import {Address} from './address';

export class User {
  constructor(firstName?: string, lastName?: string, cellNumber?: string,
              physicalAddress?: Address, postalAddress?: Address,
              comment?: string) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._cellNumber = cellNumber;
    this._physicalAddress = physicalAddress ? null : new Address();
    this._postalAddress = postalAddress ? null : new Address();
    this._comments = comment;
  }

  private _comments: string;

  get comments(): string {
    return this._comments;
  }

  set comments(value: string) {
    this._comments = value;
  }

  private _physicalAddress: Address;

  get physicalAddress(): Address {
    return this._physicalAddress;
  }

  set physicalAddress(value: Address) {
    this._physicalAddress = value;
  }

  private _postalAddress: Address;

  get postalAddress(): Address {
    return this._postalAddress;
  }

  set postalAddress(value: Address) {
    this._postalAddress = value;
  }

  private _firstName: string;

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  private _cellNumber: string;

  get cellNumber(): string {
    return this._cellNumber;
  }

  set cellNumber(value: string) {
    this._cellNumber = value;
  }

  private _lastName: string;

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }
}
