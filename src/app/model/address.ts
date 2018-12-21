export class Address {

  id: number;
  version: number;
  lineOne: string;
  lineTwo: string;
  lineThree: string;


  constructor(id: number, version: number, lineOne: string, lineTwo?: string, lineThree?: string) {
    this.id = id;
    this.version = version;
    this.lineOne = lineOne;
    this.lineTwo = lineTwo || '';
    this.lineThree = lineThree || '';
  }
}
