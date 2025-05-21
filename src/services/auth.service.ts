import {inject, Injectable} from '@angular/core';
import {Auth, signInWithEmailAndPassword} from "@angular/fire/auth";

export interface IUser {
    email: string;
    password: string;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private _auth = inject(Auth);
    
    
    async signIn(user: IUser){
        return await signInWithEmailAndPassword(this._auth, user.email, user.password);
    }
}
