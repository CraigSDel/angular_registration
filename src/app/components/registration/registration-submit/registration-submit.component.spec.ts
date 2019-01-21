import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RegistrationSubmitComponent} from './registration-submit.component';

describe('RegistrationSubmitComponent', () => {
  let component: RegistrationSubmitComponent;
  let fixture: ComponentFixture<RegistrationSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationSubmitComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
