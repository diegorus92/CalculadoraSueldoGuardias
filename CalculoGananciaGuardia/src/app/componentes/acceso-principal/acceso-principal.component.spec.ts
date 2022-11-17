import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesoPrincipalComponent } from './acceso-principal.component';

describe('AccesoPrincipalComponent', () => {
  let component: AccesoPrincipalComponent;
  let fixture: ComponentFixture<AccesoPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccesoPrincipalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccesoPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
