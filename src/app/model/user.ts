export class User {

  constructor(firstName?: string, middleName?: string, lastName?: string) {
    this._firstName = firstName;
    this._secondName = middleName;
    this._lastName = lastName;
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
