import {AfterViewInit, Component, inject, signal} from '@angular/core';
import {SearchBarComponent} from "../../components/search-bar/search-bar.component";
import {TreatmentCardComponent} from "../../components/treatment-card/treatment-card.component";
import {initFlowbite} from "flowbite";
import {TreatmentModalComponent} from "../../components/treatment-modal/treatment-modal.component";
import {TableComponent} from "../../components/table/table.component";
import {ITreatment, TreatmentService} from "../../services/treatment.service";

@Component({
  selector: 'app-admin-treatments',
    imports: [
        TreatmentModalComponent,
        TableComponent
    ],
  templateUrl: './admin-treatments.component.html',
  styleUrl: './admin-treatments.component.css'
})
export class AdminTreatmentsComponent implements AfterViewInit{
    private _treatmentService = inject(TreatmentService);
    treatments = this._treatmentService.getTreatments;
    
    ngAfterViewInit() {
        setTimeout(() => {
            initFlowbite();
        }, 1000);
    }
}
