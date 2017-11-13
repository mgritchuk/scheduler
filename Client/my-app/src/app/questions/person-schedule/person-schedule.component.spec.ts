import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonScheduleComponent } from './person-schedule.component';

describe('PersonScheduleComponent', () => {
  let component: PersonScheduleComponent;
  let fixture: ComponentFixture<PersonScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
