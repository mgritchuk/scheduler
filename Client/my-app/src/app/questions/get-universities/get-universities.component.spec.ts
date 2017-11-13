import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetUniversitiesComponent } from './get-universities.component';

describe('GetUniversitiesComponent', () => {
  let component: GetUniversitiesComponent;
  let fixture: ComponentFixture<GetUniversitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetUniversitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetUniversitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
