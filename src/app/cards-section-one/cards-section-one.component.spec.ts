import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsSectionOneComponent } from './cards-section-one.component';

describe('CardsSectionOneComponent', () => {
  let component: CardsSectionOneComponent;
  let fixture: ComponentFixture<CardsSectionOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsSectionOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsSectionOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
