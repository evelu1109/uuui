import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageIniciarSesionComponent } from './page-iniciar-sesion.component';

describe('PageIniciarSesionComponent', () => {
  let component: PageIniciarSesionComponent;
  let fixture: ComponentFixture<PageIniciarSesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageIniciarSesionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageIniciarSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
