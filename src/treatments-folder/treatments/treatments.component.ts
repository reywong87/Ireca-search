import {Component, inject, signal} from '@angular/core';
import {SearchBarComponent} from "../../components/search-bar/search-bar.component";
import {TreatmentCardComponent} from "../../components/treatment-card/treatment-card.component";
import {TreatmentService} from "../../services/treatment.service";
import {createFilteredTreatments} from "../../util/filter-treatments.util";

@Component({
  selector: 'app-treatments',
  imports: [
    SearchBarComponent,
    TreatmentCardComponent
  ],
  templateUrl: './treatments.component.html',
  styleUrl: './treatments.component.css'
})
export class TreatmentsComponent {
  private _treatmentService = inject(TreatmentService);
  treatments = this._treatmentService.getTreatments;
  searchQuery = signal<string>('');
  filteredTreatments = createFilteredTreatments(this.treatments, this.searchQuery);
}
