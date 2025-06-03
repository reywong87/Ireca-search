import {Component, effect, inject, input} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ITreatment, TreatmentCreate, TreatmentService} from "../../services/treatment.service";
import {ToastService} from "../../services/toast.service";

@Component({
  selector: 'app-treatment-modal',
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './treatment-modal.component.html',
  styleUrl: './treatment-modal.component.css'
})
export class TreatmentModalComponent {
  private _formBuilder = inject(FormBuilder);
  private _treatmentService = inject(TreatmentService);
  private _toastService = inject(ToastService);
  
  modalId = input.required<string>();
  modalTitle = input.required<string>();
  treatmentToEdit = input<ITreatment | null>(null);
  
  public modalForm: FormGroup = this._formBuilder.nonNullable.group({
    suffering: ['', Validators.required],
    treatment: ['', Validators.required],
  });

  constructor() {
    effect(() => {
      this.resetModal();
    });
  }
  
  async onSubmit(){
    try {
      const {suffering, treatment} = this.modalForm.value;
      const newTreatment: TreatmentCreate = {
        suffering: suffering || '',
        treatment: treatment || '',
      };
      
      if (this.treatmentToEdit()) {
        await this._treatmentService.updateTreatment(this.treatmentToEdit()!.id, {
          suffering,
          treatment
        });
        this._toastService.showToast('Tratamiento actualizado correctamente.', 'success');
      }
      else {
        await this._treatmentService.createTreatment(newTreatment);
        this._toastService.showToast('Tratamiento creada correctamente.', 'success');
        this.resetModal();
      }
      
    }
    catch (error) {
      this._toastService.showToast('Ocurrió un problema.', 'error');
    }
  }
  
  resetModal(){
    if (this.treatmentToEdit()) {
      this.modalForm.patchValue({
        suffering: this.treatmentToEdit()?.suffering,
        treatment: this.treatmentToEdit()?.treatment
      });
    }
    else {
      this.modalForm.reset({
        suffering: '',
        treatment: ''
      });
    }
  }
  
  onCloseModal(){
    this.resetModal();
  }
}
