import {AfterViewInit, Component, computed, inject, signal} from '@angular/core';
import {initFlowbite} from "flowbite";
import {TreatmentModalComponent} from "../../components/treatment-modal/treatment-modal.component";
import {TableComponent} from "../../components/table/table.component";
import {TreatmentService} from "../../services/treatment.service";
import {SearchBarComponent} from "../../components/search-bar/search-bar.component";

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
    treatments = this._treatmentService.getTreatments;
    searchQuery = signal<string>('');

    filteredTreatments = computed(() => {
        const normalize = (str: string) =>
            str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
        
        const query = normalize(this.searchQuery());
        return this.treatments().filter(t =>
        {
            const suffering = normalize(t.suffering);
            const treatment = normalize(t.treatment);
            return suffering.includes(query) || treatment.includes(query);
        });
    });
    
    ngAfterViewInit() {
        setTimeout(() => {
            initFlowbite();
        }, 1000);
    }
}
