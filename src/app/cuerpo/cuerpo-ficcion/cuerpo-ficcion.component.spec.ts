import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpoFiccionComponent } from './cuerpo-ficcion.component';

describe('CuerpoFiccionComponent', () => {
  let component: CuerpoFiccionComponent;
  let fixture: ComponentFixture<CuerpoFiccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuerpoFiccionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuerpoFiccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
