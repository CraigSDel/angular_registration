export class Address {
  constructor(id?: number, version?: number, lineOne?: string, lineTwo?: string, lineThree?: string
  ) {
    this._id = id;
    this._version = version;
    this._lineOne = lineOne;
    this._lineTwo = lineTwo || '';
    this._lineThree = lineThree || '';
  }

  private _id: number;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  private _version: number;

  get version(): number {
    return this._version;
  }

  set version(value: number) {
    this._version = value;
  }

  private _lineOne: string;

  get lineOne(): string {
    return this._lineOne;
  }

  set lineOne(value: string) {
    this._lineOne = value;
  }

  private _lineTwo: string;

  get lineTwo(): string {
    return this._lineTwo;
  }

  set lineTwo(value: string) {
    this._lineTwo = value;
  }

  private _lineThree: string;

  get lineThree(): string {
    return this._lineThree;
  }

  set lineThree(value: string) {
    this._lineThree = value;
  }
}
