import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaCobroComponent } from './tabla-cobro.component';

describe('TablaCobroComponent', () => {
  let component: TablaCobroComponent;
  let fixture: ComponentFixture<TablaCobroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaCobroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaCobroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
