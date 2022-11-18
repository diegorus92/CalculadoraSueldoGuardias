import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregaGuardiaComponent } from './agrega-guardia.component';

describe('AgregaGuardiaComponent', () => {
  let component: AgregaGuardiaComponent;
  let fixture: ComponentFixture<AgregaGuardiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregaGuardiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregaGuardiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
