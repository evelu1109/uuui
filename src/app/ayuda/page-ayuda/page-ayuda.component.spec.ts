import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAyudaComponent } from './page-ayuda.component';

describe('PageAyudaComponent', () => {
  let component: PageAyudaComponent;
  let fixture: ComponentFixture<PageAyudaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAyudaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAyudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
