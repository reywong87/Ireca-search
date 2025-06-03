import {AfterViewInit, Component, effect, inject, input, signal} from '@angular/core';
import {ITreatment, TreatmentService} from "../../services/treatment.service";
import {TreatmentModalComponent} from "../treatment-modal/treatment-modal.component";
import {initFlowbite} from "flowbite";

@Component({
    selector: 'app-table',
    imports: [
        TreatmentModalComponent,
    ],
    templateUrl: './table.component.html',
    styleUrl: './table.component.css'
})
export class TableComponent {
    private _treatmentService = inject(TreatmentService);

    treatments = input.required<ITreatment[]>();
    selectedTreatment = signal<ITreatment | null>(null);
    treatmentToDelete = signal<ITreatment | null>(null);
    
    
    openEditModal(treatment: ITreatment) {
        this.selectedTreatment.set(treatment);
    }

    openDeleteModal(treatment: ITreatment) {
        this.treatmentToDelete.set(treatment);
    }

    async deleteTreatment() {
        const treatment = this.treatmentToDelete();
        if (!treatment?.id) return;
        await this._treatmentService.deleteTreatment(treatment.id)
    }
}
