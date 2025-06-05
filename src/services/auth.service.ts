import {inject, Injectable} from '@angular/core';
import {SupabaseService} from "./supabase.service";

export interface IUser {
    email: string;
    password: string;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private _supabaseService = inject(SupabaseService);


    async signIn(user: IUser) {
        const result = await this._supabaseService.client.auth.signInWithPassword({
            email: user.email,
            password: user.password,
        });

        if (result.error) {
            throw result.error;
        }

        return result.data;
    }
}
