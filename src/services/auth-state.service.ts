import {computed, inject, Injectable} from '@angular/core';
import {Auth, authState, signOut} from "@angular/fire/auth";
import {toSignal} from "@angular/core/rxjs-interop";

@Injectable({
    providedIn: 'root'
})
export class AuthStateService {
    private _auth = inject(Auth);
    private userSignal = toSignal(authState(this._auth), {initialValue: null});

    readonly isLoggedIn = computed(()=> !!this.userSignal());
    
    get authState$(){
        return authState(this._auth);
    }

    async logout(): Promise<void> {
        try {
            await signOut(this._auth);
            console.log('✅ Sesión cerrada correctamente');
        } catch (error) {
            console.error('❌ Error al cerrar sesión', error);
        }
    }
}
