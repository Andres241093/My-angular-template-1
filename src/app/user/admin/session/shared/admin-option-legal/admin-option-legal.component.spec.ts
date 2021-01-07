import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOptionLegalComponent } from './admin-option-legal.component';

describe('AdminOptionLegalComponent', () => {
  let component: AdminOptionLegalComponent;
  let fixture: ComponentFixture<AdminOptionLegalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminOptionLegalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOptionLegalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
