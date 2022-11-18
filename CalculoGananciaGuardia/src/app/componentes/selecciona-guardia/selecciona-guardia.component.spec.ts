import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionaGuardiaComponent } from './selecciona-guardia.component';

describe('SeleccionaGuardiaComponent', () => {
  let component: SeleccionaGuardiaComponent;
  let fixture: ComponentFixture<SeleccionaGuardiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeleccionaGuardiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeleccionaGuardiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
