import {CanActivateFn, Router} from "@angular/router";
import {inject} from "@angular/core";
import {AuthStateService} from "../services/auth-state.service";
import {map} from "rxjs";
import {SupabaseService} from "../services/supabase.service";

export const privateGuard: CanActivateFn = async () => {
    const router = inject(Router);
    const supabase = inject(SupabaseService).client;
    const { data } = await supabase.auth.getUser();

    if (!data.user) {
        router.navigateByUrl('/');
        return false;
    }
    return true;
}

export const publicGuard: CanActivateFn = async () => {
    const router = inject(Router);
    const supabase = inject(SupabaseService).client;
    const { data } = await supabase.auth.getUser();

    if (data.user) {
        router.navigateByUrl('/admin-treatments');
        return false;
    }
    return true;
}