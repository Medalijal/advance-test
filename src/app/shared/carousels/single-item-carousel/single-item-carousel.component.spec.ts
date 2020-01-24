import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SingleItemCarouselComponent} from './single-item-carousel.component';

describe('SingleItemCarouselComponent', () => {
  let component: SingleItemCarouselComponent;
  let fixture: ComponentFixture<SingleItemCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleItemCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleItemCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
