import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodasLasFotosComponent } from './todas-las-fotos.component';

describe('TodasLasFotosComponent', () => {
  let component: TodasLasFotosComponent;
  let fixture: ComponentFixture<TodasLasFotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodasLasFotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodasLasFotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
