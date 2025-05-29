import {Component, input, WritableSignal} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
    selector: 'app-search-bar',
    imports: [
        FormsModule
    ],
    templateUrl: './search-bar.component.html',
    styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
    searchQuery = input<WritableSignal<string>>();
    search = '';
}
