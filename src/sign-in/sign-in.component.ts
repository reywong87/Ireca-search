import {Component, inject, signal} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-sign-in',
    imports: [
        ReactiveFormsModule
    ],
    templateUrl: './sign-in.component.html',
    styleUrl: './sign-in.component.css'
})
export class SignInComponent {
    private _formBuilder = inject(FormBuilder);
    private _authService = inject(AuthService);
    private _router = inject(Router);
    public showError = signal(false);
    public form: FormGroup = this._formBuilder.group({
        email: [
            null,
            [Validators.required, Validators.email]],
        password: [
            null,
            Validators.required,
        ]
    });
    
    async onSubmit(){
        const { email, password } = this.form.value;
        try {
            await this._authService.signIn({email, password});
            await this._router.navigateByUrl('/admin-treatments');
        }
        catch(err){
            console.log(err);
            this.showErrorMsg();
        }
    }
    
   showErrorMsg(){
        this.showError.set(true);
       setTimeout(() => {
           this.showError.set(false);
       }, 2000);
   }
}
