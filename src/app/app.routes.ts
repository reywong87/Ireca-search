import { Routes } from '@angular/router';
import {SignInComponent} from "../sign-in/sign-in.component";
import {AdminTreatmentsComponent} from "../treatments-folder/admin-treatments/admin-treatments.component";
import {TreatmentsComponent} from "../treatments-folder/treatments/treatments.component";

export const routes: Routes = [
    {
        path: '',
        component: TreatmentsComponent
    },
    {
        path: 'admin-login-ireca',
        component: SignInComponent
    },
    {
        path: 'admin-treatments',
        component: AdminTreatmentsComponent
    },
];
