import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {initFlowbite} from 'flowbite';
import {TreatmentsComponent} from "../treatments-folder/treatments/treatments.component";

@Component({
  selector: 'app-root',
    imports: [RouterOutlet, TreatmentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'IrecaSearch';

  ngOnInit() {
    initFlowbite();
  }
}
