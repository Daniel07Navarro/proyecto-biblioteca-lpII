import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpoNoFiccionComponent } from './cuerpo-no-ficcion.component';

describe('CuerpoNoFiccionComponent', () => {
  let component: CuerpoNoFiccionComponent;
  let fixture: ComponentFixture<CuerpoNoFiccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuerpoNoFiccionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuerpoNoFiccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
