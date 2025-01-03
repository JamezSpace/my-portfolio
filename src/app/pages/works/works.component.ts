import { Component } from '@angular/core';
import { WorkCategoryBtnComponent } from '../../components/work-category-btn/work-category-btn.component';

@Component({
  selector: 'my-works',
  imports: [WorkCategoryBtnComponent],
  templateUrl: './works.component.html',
  styleUrl: './works.component.css'
})
export class WorksComponent {
    visible: boolean = true;
    selected_category: string = ""

    oncategorySelected(category: string) {
        this.selected_category = category;
        this.visible = !this.visible;
    }

    backToMenu() {
        this.selected_category = "";
        this.visible = !this.visible;
    }
}
