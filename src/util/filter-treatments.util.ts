import {ITreatment} from "../services/treatment.service";
import {computed, Signal} from "@angular/core";


export function createFilteredTreatments(treatments: Signal<ITreatment[]>, searchQuery: Signal<string>) {
    const normalize = (str: string) =>
        str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    
    return computed(()=>{
        const query = normalize(searchQuery());
        return treatments().filter(t => {
            const suffering = normalize(t.suffering);
            const treatment = normalize(t.treatment);
            return suffering.includes(query) || treatment.includes(query);
        });
    });
}