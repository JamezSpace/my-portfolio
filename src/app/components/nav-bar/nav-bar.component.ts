import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'nav-bar',
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
    constructor(private viewportscroller: ViewportScroller) { }

    scrollToSection(section_id: string): void {
        this.viewportscroller.scrollToAnchor(section_id);
    }
}
