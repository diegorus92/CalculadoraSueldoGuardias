import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesoTablasComponent } from './acceso-tablas.component';

describe('AccesoTablasComponent', () => {
  let component: AccesoTablasComponent;
  let fixture: ComponentFixture<AccesoTablasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccesoTablasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccesoTablasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
