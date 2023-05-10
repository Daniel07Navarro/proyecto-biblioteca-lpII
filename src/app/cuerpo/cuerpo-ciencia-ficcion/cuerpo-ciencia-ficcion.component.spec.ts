import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpoCienciaFiccionComponent } from './cuerpo-ciencia-ficcion.component';

describe('CuerpoCienciaFiccionComponent', () => {
  let component: CuerpoCienciaFiccionComponent;
  let fixture: ComponentFixture<CuerpoCienciaFiccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuerpoCienciaFiccionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuerpoCienciaFiccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
