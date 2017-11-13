import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversitySpecialtiesComponent } from './university-specialties.component';

describe('UniversitySpecialtiesComponent', () => {
  let component: UniversitySpecialtiesComponent;
  let fixture: ComponentFixture<UniversitySpecialtiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversitySpecialtiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversitySpecialtiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
