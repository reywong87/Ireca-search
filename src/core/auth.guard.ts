import {CanActivateFn, Router} from "@angular/router";
import {inject} from "@angular/core";
import {AuthStateService} from "../services/auth-state.service";
import {map} from "rxjs";

export const privateGuard: CanActivateFn = () => {
    const router = inject(Router);
    const authState = inject(AuthStateService);
    const user = authState.currentUser;

    if (!user) {
        router.navigateByUrl('/');
        return false;
    }
    return true;
}

export const publicGuard: CanActivateFn = () => {
    const router = inject(Router);
    const authState = inject(AuthStateService);
    const user = authState.currentUser;

    if (user) {
        router.navigateByUrl('/admin-treatments');
        return false;
    }
    return true;
}