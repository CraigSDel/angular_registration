import {Action} from '@ngrx/store';

export enum ActionTypes {
  PageO1 = '[Counter Component] PageO1',
  PageO2 = '[Counter Component] PageO2',
  PageO3 = '[Counter Component] PageO3',
}

export class PageO1 implements Action {
  readonly type = ActionTypes.PageO1;
}

export class PageO2 implements Action {
  readonly type = ActionTypes.PageO2;
}

export class PageO3 implements Action {
  readonly type = ActionTypes.PageO3;
}
