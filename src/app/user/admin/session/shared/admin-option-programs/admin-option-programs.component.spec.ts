import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOptionProgramsComponent } from './admin-option-programs.component';

describe('AdminOptionProgramsComponent', () => {
  let component: AdminOptionProgramsComponent;
  let fixture: ComponentFixture<AdminOptionProgramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminOptionProgramsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOptionProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
