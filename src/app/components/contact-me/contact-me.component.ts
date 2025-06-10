import { Component, Input, Output, signal, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'contact-me',
  imports: [MatInputModule, MatRadioModule, MatFormFieldModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.css'
})
export class ContactMeComponent {
    
    @Input() view = 'opened'
    @Output() viewChange = new EventEmitter<string>();

    updateErrorMessages(): void {

    };

    nameErrorMessage(): void {

    }

    readonly client_email = new FormControl('', Validators.email);

    contactMeMessage = new FormGroup({
        client_email : this.client_email,
        message: new FormControl('')
    })


    closeComponent() {
        this.viewChange.emit('closed');
    }
}
