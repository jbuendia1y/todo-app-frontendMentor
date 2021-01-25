import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewWorkFormComponent } from './new-work-form.component';

describe('NewWorkFormComponent', () => {
  let component: NewWorkFormComponent;
  let fixture: ComponentFixture<NewWorkFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewWorkFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewWorkFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
