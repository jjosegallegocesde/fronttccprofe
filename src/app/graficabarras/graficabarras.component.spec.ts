import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficabarrasComponent } from './graficabarras.component';

describe('GraficabarrasComponent', () => {
  let component: GraficabarrasComponent;
  let fixture: ComponentFixture<GraficabarrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficabarrasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficabarrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
