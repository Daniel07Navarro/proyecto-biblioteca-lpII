import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpoDetallesComponent } from './cuerpo-detalles.component';

describe('CuerpoDetallesComponent', () => {
  let component: CuerpoDetallesComponent;
  let fixture: ComponentFixture<CuerpoDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuerpoDetallesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuerpoDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
