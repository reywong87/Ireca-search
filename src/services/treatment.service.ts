import {effect, inject, Injectable, signal} from '@angular/core';
import {SupabaseService} from "./supabase.service";

export interface ITreatment {
    id: string;
    suffering: string;
    treatment: string;
}

export type TreatmentCreate = Omit<ITreatment, 'id'>;

const PATH = 'treatments';

@Injectable({
    providedIn: 'root'
})
export class TreatmentService {
    private _supabase = inject(SupabaseService).client;
    private _treatments = signal<ITreatment[]>([]);

    constructor() {
        effect(() => {
            this.fetchTreatments();
        });
    }

    // Devuelve signal reactivo para usar en componentes
    get treatments() {
        return this._treatments;
    }

    async fetchTreatments() {
        const {data, error} = await this._supabase
            .from('treatments')
            .select('*')
            .order('suffering', {ascending: true});

        if (error) {
            console.error('Error loading treatments', error);
        } else {
            this._treatments.set(data as ITreatment[]);
        }
    }

    async createTreatment(treatment: TreatmentCreate) {
      console.log('🧪 Tratamiento a guardar:', treatment);
        const {error} = await this._supabase
            .from('treatments')
            .insert(treatment)
            .throwOnError();

        if (!error) await this.fetchTreatments(); // Recargar
    }

    async updateTreatment(id: string, data: Partial<TreatmentCreate>) {
        const {error} = await this._supabase
            .from('treatments')
            .update(data)
            .eq('id', id);

        if (!error) await this.fetchTreatments();
    }

    async deleteTreatment(id: string) {
        const {error} = await this._supabase
            .from('treatments')
            .delete()
            .eq('id', id);

        if (!error) await this.fetchTreatments();
    }
}
