import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {getAuth, provideAuth} from '@angular/fire/auth';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
    providers: [provideZoneChangeDetection({eventCoalescing: true}), provideRouter(routes), provideFirebaseApp(() => initializeApp({
        projectId: "ireca-search",
        appId: "1:313971213856:web:70c4a836f7db07497c5e45",
        storageBucket: "ireca-search.firebasestorage.app",
        apiKey: "AIzaSyBrDETQi1DNKmCiFZYzcgoQxCvlrG3ORhI",
        authDomain: "ireca-search.firebaseapp.com",
        messagingSenderId: "313971213856"
    })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
