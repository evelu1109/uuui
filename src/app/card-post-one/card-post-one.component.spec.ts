import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPostOneComponent } from './card-post-one.component';

describe('CardPostOneComponent', () => {
  let component: CardPostOneComponent;
  let fixture: ComponentFixture<CardPostOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPostOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPostOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
