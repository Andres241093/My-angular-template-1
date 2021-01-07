import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOptionAnotherOptionsComponent } from './admin-option-another-options.component';

describe('AdminOptionAnotherOptionsComponent', () => {
  let component: AdminOptionAnotherOptionsComponent;
  let fixture: ComponentFixture<AdminOptionAnotherOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminOptionAnotherOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOptionAnotherOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
