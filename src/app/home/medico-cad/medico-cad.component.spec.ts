import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoCadComponent } from './medico-cad.component';

describe('MedicoCadComponent', () => {
  let component: MedicoCadComponent;
  let fixture: ComponentFixture<MedicoCadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicoCadComponent]
    });
    fixture = TestBed.createComponent(MedicoCadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
