import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatmentModalComponent } from './treatment-modal.component';

describe('TreatmentModalComponent', () => {
  let component: TreatmentModalComponent;
  let fixture: ComponentFixture<TreatmentModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreatmentModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreatmentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
