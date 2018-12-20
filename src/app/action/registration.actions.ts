import {Action} from '@ngrx/store';

export enum ActionTypes {
  Page01 = '[Registration Component] Page01',
  Page02 = '[Registration Component] Page02',
  Page03 = '[Registration Component] Page03',
}

export class Page01 implements Action {
  readonly type = ActionTypes.Page01;
}

export class Page02 implements Action {
  readonly type = ActionTypes.Page02;
}

export class Page03 implements Action {
  readonly type = ActionTypes.Page03;
}
