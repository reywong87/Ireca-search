import {Component, output, signal} from '@angular/core';

@Component({
  selector: 'app-filter-treatment',
  imports: [],
  templateUrl: './filter-treatment.component.html',
  styleUrl: './filter-treatment.component.css'
})
export class FilterTreatmentComponent {
  centers = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7'];
  selectedCenters = signal<string[]>([]);
  centersChanged = output<string[]>();
  
  toggleCenter(event: Event, center: string): void {
    const checkbox = event.target as HTMLInputElement;
    const checked = checkbox.checked;
    
    const current = this.selectedCenters();
    const updated = checked ? [...current, center] : current.filter(c => c !== center);
    this.selectedCenters.set(updated);
    this.centersChanged.emit(updated);
  }
}
