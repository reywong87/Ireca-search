import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterTreatmentComponent } from './filter-treatment.component';

describe('FilterTreatmentComponent', () => {
  let component: FilterTreatmentComponent;
  let fixture: ComponentFixture<FilterTreatmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterTreatmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterTreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
