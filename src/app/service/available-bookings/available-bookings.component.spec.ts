import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableBookingsComponent } from './available-bookings.component';

describe('AvailableBookingsComponent', () => {
  let component: AvailableBookingsComponent;
  let fixture: ComponentFixture<AvailableBookingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvailableBookingsComponent]
    });
    fixture = TestBed.createComponent(AvailableBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
