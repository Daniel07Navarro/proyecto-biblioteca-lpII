import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpoHistoriaComponent } from './cuerpo-historia.component';

describe('CuerpoHistoriaComponent', () => {
  let component: CuerpoHistoriaComponent;
  let fixture: ComponentFixture<CuerpoHistoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuerpoHistoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuerpoHistoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
