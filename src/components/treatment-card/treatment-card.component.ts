import {Component, effect, input} from '@angular/core';
import {ITreatment} from "../../services/treatment.service";

@Component({
    selector: 'app-treatment-card',
    imports: [],
    templateUrl: './treatment-card.component.html',
    styleUrl: './treatment-card.component.css'
})
export class TreatmentCardComponent  {
    treatment = input.required<ITreatment>();
}
