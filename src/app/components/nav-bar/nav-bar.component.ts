import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'nav-bar',
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

    @ViewChild('extranavbar') side_nav_bar !: ElementRef;
    @ViewChild('pseudobody') pseudobody !: ElementRef;

    constructor(private viewportscroller: ViewportScroller) { }

    scrollToSection(section_id: string): void {
        this.viewportscroller.scrollToAnchor(section_id);
    }

    toggleNavBar(): void {
        this.pseudobody.nativeElement.classList.toggle('open-nav-bar');

        this.side_nav_bar.nativeElement.classList.toggle('opened');
    }
}
