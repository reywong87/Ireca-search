import {AfterViewInit, Component, computed, effect, inject, signal} from '@angular/core';
import {initFlowbite} from "flowbite";
import {TreatmentModalComponent} from "../../components/treatment-modal/treatment-modal.component";
import {TableComponent} from "../../components/table/table.component";
import {TreatmentService} from "../../services/treatment.service";
import {SearchBarComponent} from "../../components/search-bar/search-bar.component";
import {createFilteredTreatments} from "../../util/filter-treatments.util";

@Component({
  selector: 'app-admin-treatments',
    imports: [
        TreatmentModalComponent,
        TableComponent,
        SearchBarComponent
    ],
  templateUrl: './admin-treatments.component.html',
  styleUrl: './admin-treatments.component.css'
})
export class AdminTreatmentsComponent implements AfterViewInit{
    private _treatmentService = inject(TreatmentService);
    private _flowbiteInitEffect = effect(() => {
        const treatments = this.filteredTreatments();
        if (!treatments || treatments.length === 0) return;
        setTimeout(() => initFlowbite(), 0);
    });
    
    treatments = this._treatmentService.getTreatments;
    searchQuery = signal<string>('');
    filteredTreatments = createFilteredTreatments(this.treatments, this.searchQuery);
    
    
    ngAfterViewInit() {
        setTimeout(() => {
            initFlowbite();
        }, 1000);
    }
}
