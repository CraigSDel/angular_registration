import {Address} from "./address";

export class User {
  constructor(firstName?: string, middleName?: string, lastName?: string, addressOne?: Address, addressTwo?: Address, comment?: string) {
    this._firstName = firstName;
    this._secondName = middleName;
    this._lastName = lastName;
    this._addressOne = addressOne ? null : new Address();
    this._addressTwo = addressTwo ? null : new Address();
    this._comment = comment;
  }

  private _comment: string;

  get comment(): string {
    return this._comment;
  }

  set comment(value: string) {
    this._comment = value;
  }

  private _addressOne: Address;

  get addressOne(): Address {
    return this._addressOne;
  }

  set addressOne(value: Address) {
    this._addressOne = value;
  }

  private _addressTwo: Address;

  get addressTwo(): Address {
    return this._addressTwo;
  }

  set addressTwo(value: Address) {
    this._addressTwo = value;
  }

  private _firstName: string;

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  private _secondName: string;

  get secondName(): string {
    return this._secondName;
  }

  set secondName(value: string) {
    this._secondName = value;
  }

  private _lastName: string;

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }
}
