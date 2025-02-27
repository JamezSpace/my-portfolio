import { ChangeDetectionStrategy, Component, model, signal } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
    selector: 'calculator',
    imports: [MatIconModule, MatInputModule, MatRadioModule, MatFormFieldModule, FormsModule, ReactiveFormsModule],
    templateUrl: './calculator.component.html',
    styleUrl: './calculator.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalculatorComponent {
    readonly email = new FormControl('', [Validators.email, Validators.required])
    readonly name = new FormControl('', [Validators.required, Validators.pattern(/^[^\d]*$/)])

    emailErrorMessage = signal('')
    nameErrorMessage = signal('')

    checkEmailError () {
        if (this.email.hasError('required')) {
            this.emailErrorMessage.set('You must enter a value');
        } else if (this.email.hasError('email')) {
            this.emailErrorMessage.set('Not a valid email');
        } else {
            this.emailErrorMessage.set('');
        }
    }

    checkNameError() {
        if (this.name.hasError('required'))
            this.nameErrorMessage.set('You need to enter your name')
        else if (this.name.hasError('pattern'))
            this.nameErrorMessage.set('Kindly remove the digit in your name')
    }

    updateErrorMessages() {
        this.checkEmailError()
        this.checkNameError()
    }

    project = new FormGroup({
        name: new FormControl('', [Validators.required]),
        email: this.email
    })
}
