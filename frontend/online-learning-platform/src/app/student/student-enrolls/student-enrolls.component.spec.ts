import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentEnrollsComponent } from './student-enrolls.component';

describe('StudentEnrollsComponent', () => {
  let component: StudentEnrollsComponent;
  let fixture: ComponentFixture<StudentEnrollsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentEnrollsComponent]
    });
    fixture = TestBed.createComponent(StudentEnrollsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
