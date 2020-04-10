import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCinemaFormComponent } from './add-cinema-form.component';

describe('AddCinemaFormComponent', () => {
  let component: AddCinemaFormComponent;
  let fixture: ComponentFixture<AddCinemaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCinemaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCinemaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
