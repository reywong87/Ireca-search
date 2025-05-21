import {Component, inject, OnInit} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {initFlowbite} from 'flowbite';
import {TreatmentsComponent} from "../treatments-folder/treatments/treatments.component";
import {AuthStateService} from "../services/auth-state.service";

@Component({
  selector: 'app-root',
    imports: [RouterOutlet, TreatmentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  authState = inject(AuthStateService);
  private _router = inject(Router);

  ngOnInit() {
    initFlowbite();
  }
  
  async logOut() {
    await this.authState.logout();
    this._router.navigateByUrl('');
  }
}
