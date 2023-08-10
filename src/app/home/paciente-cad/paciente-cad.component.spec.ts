import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteCadComponent} from './paciente-cad.component';

describe('PacienteCadComponent', () => {
  let component: PacienteCadComponent;
  let fixture: ComponentFixture<PacienteCadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PacienteCadComponent]
    });
    fixture = TestBed.createComponent(PacienteCadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
