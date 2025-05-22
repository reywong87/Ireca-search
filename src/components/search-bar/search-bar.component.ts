import {AfterViewInit, Component, inject} from '@angular/core';
import {initFlowbite} from "flowbite";
import {AuthStateService} from "../../services/auth-state.service";

@Component({
    selector: 'app-search-bar',
    imports: [],
    templateUrl: './search-bar.component.html',
    styleUrl: './search-bar.component.css'
})
export class SearchBarComponent implements AfterViewInit {
    private _authStageService = inject(AuthStateService);
    isLoggedIn = this._authStageService.isLoggedIn;

    ngAfterViewInit(): void {
        setTimeout(() => {
            initFlowbite();
        }, 1000);
    }
}
