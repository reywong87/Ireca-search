import {AfterViewInit, Component, inject} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {initFlowbite} from 'flowbite';
import {AuthStateService} from "../services/auth-state.service";
import {ToastMessageComponent} from "../components/toast-message/toast-message.component";

@Component({
  selector: 'app-root',
    imports: [RouterOutlet, ToastMessageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  authState = inject(AuthStateService);
  private _router = inject(Router);

  ngAfterViewInit() {
    initFlowbite();
  }
  
  async logOut() {
    await this.authState.logout();
    this._router.navigateByUrl('');
  }
}
