import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsSectionTwoComponent } from './cards-section-two.component';

describe('CardsSectionTwoComponent', () => {
  let component: CardsSectionTwoComponent;
  let fixture: ComponentFixture<CardsSectionTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsSectionTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsSectionTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
