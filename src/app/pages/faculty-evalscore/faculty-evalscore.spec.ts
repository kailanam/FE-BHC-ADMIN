import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyEvalscore } from './faculty-evalscore';

describe('FacultyEvalscore', () => {
  let component: FacultyEvalscore;
  let fixture: ComponentFixture<FacultyEvalscore>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacultyEvalscore]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultyEvalscore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
