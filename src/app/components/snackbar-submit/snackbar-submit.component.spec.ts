import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SnackbarSubmitComponent} from './snackbar-submit.component';

describe('SnackbarSubmitComponent', () => {
  let component: SnackbarSubmitComponent;
  let fixture: ComponentFixture<SnackbarSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SnackbarSubmitComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackbarSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
