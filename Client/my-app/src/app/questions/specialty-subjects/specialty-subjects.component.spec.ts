import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialtySubjectsComponent } from './specialty-subjects.component';

describe('SpecialtySubjectsComponent', () => {
  let component: SpecialtySubjectsComponent;
  let fixture: ComponentFixture<SpecialtySubjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialtySubjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialtySubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
