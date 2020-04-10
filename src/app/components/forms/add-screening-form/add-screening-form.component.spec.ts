import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddScreeningFormComponent } from './add-screening-form.component';

describe('AddScreeningFormComponent', () => {
  let component: AddScreeningFormComponent;
  let fixture: ComponentFixture<AddScreeningFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddScreeningFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddScreeningFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
