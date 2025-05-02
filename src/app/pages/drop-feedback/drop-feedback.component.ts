import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSliderModule} from '@angular/material/slider';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {toSignal} from '@angular/core/rxjs-interop';
import {map} from 'rxjs/operators';

@Component({
  selector: 'drop-feedback',
  imports: [MatExpansionModule, MatRadioModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSliderModule, ReactiveFormsModule],
  templateUrl: './drop-feedback.component.html',
  styleUrl: './drop-feedback.component.css'
})
export class DropFeedbackComponent {
    anonymousControl = new FormControl('yes')

    feedbackForm = new FormGroup({
        overall_experience: new FormControl(0, Validators.required),
        name: new FormControl(''),
        impressed: new FormControl('bland', Validators.required),
        recommendation: new FormControl('yes', Validators.required)
    })

    protected readonly formVisible = toSignal(
        this.anonymousControl.valueChanges.pipe(map(v => v || 'yes')),
        {initialValue: 'yes'},
      );
}
