import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpoRomanceComponent } from './cuerpo-romance.component';

describe('CuerpoRomanceComponent', () => {
  let component: CuerpoRomanceComponent;
  let fixture: ComponentFixture<CuerpoRomanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuerpoRomanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuerpoRomanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
