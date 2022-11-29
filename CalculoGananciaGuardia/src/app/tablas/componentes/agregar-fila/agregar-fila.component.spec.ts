import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarFilaComponent } from './agregar-fila.component';

describe('AgregarFilaComponent', () => {
  let component: AgregarFilaComponent;
  let fixture: ComponentFixture<AgregarFilaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarFilaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarFilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
