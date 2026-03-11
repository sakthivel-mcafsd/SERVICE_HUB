import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingSlideComponent } from './booking-slide.component';

describe('BookingSlideComponent', () => {
  let component: BookingSlideComponent;
  let fixture: ComponentFixture<BookingSlideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingSlideComponent]
    });
    fixture = TestBed.createComponent(BookingSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
