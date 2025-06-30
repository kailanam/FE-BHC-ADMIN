import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasslistManagement } from './classlist-management';

describe('ClasslistManagement', () => {
  let component: ClasslistManagement;
  let fixture: ComponentFixture<ClasslistManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClasslistManagement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClasslistManagement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
