import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationSaveComponent } from './registration-save.component';

describe('RegistrationSaveComponent', () => {
  let component: RegistrationSaveComponent;
  let fixture: ComponentFixture<RegistrationSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
