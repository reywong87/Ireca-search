import {ITreatment} from "../services/treatment.service";
import {computed, Signal} from "@angular/core";


export function createFilteredTreatments(treatments: Signal<ITreatment[]>, searchQuery: Signal<string>) {
    const normalize = (str: string) =>
        str
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase()
            .replace(/[^\w\s]/g, '')
            .split(/\s+/);

    return computed(() => {
        const queryWords = normalize(searchQuery());
        return treatments().filter(t => {
            const sufferingWords = normalize(t.suffering).join('');
            const treatmentWords = normalize(t.treatment).join('');

            return queryWords.every(word =>
                sufferingWords.includes(word) || treatmentWords.includes(word));
        });
    });
}