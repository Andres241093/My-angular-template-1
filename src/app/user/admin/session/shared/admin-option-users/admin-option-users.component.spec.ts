import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOptionUsersComponent } from './admin-option-users.component';

describe('AdminOptionUsersComponent', () => {
  let component: AdminOptionUsersComponent;
  let fixture: ComponentFixture<AdminOptionUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminOptionUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOptionUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
