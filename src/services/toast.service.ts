import {Injectable, signal} from '@angular/core';

export type ToastType = 'success' | 'error';

export interface ToastState {
  message: string;
  type: ToastType;
  visible: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private _toast = signal<ToastState>({
    message: '',
    type: 'success',
    visible: false
  });
  
  readonly toast = this._toast.asReadonly();
  
  showToast(message: string, type: ToastType = 'success'): void {
    this._toast.set({message, type, visible: true});
    
    setTimeout(() => {
      this._toast.update(state => ({...state, visible: false}));
    }, 2000);
  }
}
