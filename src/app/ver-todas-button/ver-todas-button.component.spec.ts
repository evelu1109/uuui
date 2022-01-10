import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerTodasButtonComponent } from './ver-todas-button.component';

describe('VerTodasButtonComponent', () => {
  let component: VerTodasButtonComponent;
  let fixture: ComponentFixture<VerTodasButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerTodasButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerTodasButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
