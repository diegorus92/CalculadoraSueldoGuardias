import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoObjetivoComponent } from './info-objetivo.component';

describe('InfoObjetivoComponent', () => {
  let component: InfoObjetivoComponent;
  let fixture: ComponentFixture<InfoObjetivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoObjetivoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoObjetivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
