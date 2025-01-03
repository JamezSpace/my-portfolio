import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'work-category-btn',
  imports: [],
  templateUrl: './work-category-btn.component.html',
  styleUrl: './work-category-btn.component.css'
})
export class WorkCategoryBtnComponent {
    @Input({required: true})
    button_text: string = "";

    @Output()
    category = new EventEmitter<string>();

    onCategorySelected() {
        this.category.emit(this.button_text);
    }
}
