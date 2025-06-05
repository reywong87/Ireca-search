import {computed, inject, Injectable, signal} from '@angular/core';
import {SupabaseService} from "./supabase.service";
import {User} from "@supabase/supabase-js";

@Injectable({
    providedIn: 'root'
})
export class AuthStateService {
    
    private _supabaseService = inject(SupabaseService);
    private readonly _user = signal<User | null>(null);

    readonly isLoggedIn = computed(()=> !!this._user());

    constructor() {
        this.initAuthListener();
        this.setInitialUser();
    }
    
    private async setInitialUser(){
        const {data} = await this._supabaseService.client.auth.getUser();
        this._user.set(data.user ?? null);
    }

    private initAuthListener() {
        this._supabaseService.client.auth.onAuthStateChange((_event, session) => {
            this._user.set(session?.user ?? null);
        });
    }

    get currentUser() {
        return this._user();
    }

    async logout(): Promise<void> {
        try {
            await this._supabaseService.client.auth.signOut();
            console.log('✅ Sesión cerrada correctamente');
        } catch (error) {
            console.error('❌ Error al cerrar sesión', error);
        }
    }
}
