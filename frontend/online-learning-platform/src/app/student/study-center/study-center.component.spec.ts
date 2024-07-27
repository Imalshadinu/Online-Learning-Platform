import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyCenterComponent } from './study-center.component';

describe('StudyCenterComponent', () => {
  let component: StudyCenterComponent;
  let fixture: ComponentFixture<StudyCenterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudyCenterComponent]
    });
    fixture = TestBed.createComponent(StudyCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
