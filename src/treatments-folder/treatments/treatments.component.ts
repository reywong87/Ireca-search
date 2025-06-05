import {Component, computed, inject, signal} from '@angular/core';
import {SearchBarComponent} from "../../components/search-bar/search-bar.component";
import {TreatmentCardComponent} from "../../components/treatment-card/treatment-card.component";
import {TreatmentService} from "../../services/treatment.service";
import {createFilteredTreatments} from "../../util/filter-treatments.util";
import {FilterTreatmentComponent} from "../../components/filters/filter-treatment/filter-treatment.component";

@Component({
  selector: 'app-treatments',
  imports: [
    SearchBarComponent,
    TreatmentCardComponent,
    FilterTreatmentComponent
  ],
  templateUrl: './treatments.component.html',
  styleUrl: './treatments.component.css'
})
export class TreatmentsComponent {
  private _treatmentService = inject(TreatmentService);
  treatments = this._treatmentService.treatments;
  searchQuery = signal<string>('');
  filteredTreatments = createFilteredTreatments(this.treatments, this.searchQuery);
  selectedCenters = signal<string[]>([]);

  filtered = computed(() => {
    const centers = this.selectedCenters();
    if (centers.length === 0) return this.filteredTreatments();

    return this.filteredTreatments().filter(t =>
        centers.some(center => t.treatment.toLowerCase().includes(center.toLowerCase()))
    );
  });

  onCentersChanged(centers: string[]) {
    this.selectedCenters.set(centers);
  }
}
