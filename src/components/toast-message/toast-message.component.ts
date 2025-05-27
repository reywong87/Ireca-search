import {Component, inject} from '@angular/core';
import {ToastService} from "../../services/toast.service";

@Component({
  selector: 'app-toast-message',
  imports: [],
  templateUrl: './toast-message.component.html',
  styleUrl: './toast-message.component.css'
})
export class ToastMessageComponent {
  private _toastService = inject(ToastService);
  toast = this._toastService.toast
  
}
