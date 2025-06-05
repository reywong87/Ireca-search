import { Injectable } from '@angular/core';
import {createClient} from "@supabase/supabase-js";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private _client = createClient(
      environment.supabaseUrl,
      environment.supabaseKey,
  );

  get client() {
    return this._client;
  }
}
