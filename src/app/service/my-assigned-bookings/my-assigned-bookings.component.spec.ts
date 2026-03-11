import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAssignedBookingsComponent } from './my-assigned-bookings.component';

describe('MyAssignedBookingsComponent', () => {
  let component: MyAssignedBookingsComponent;
  let fixture: ComponentFixture<MyAssignedBookingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyAssignedBookingsComponent]
    });
    fixture = TestBed.createComponent(MyAssignedBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
