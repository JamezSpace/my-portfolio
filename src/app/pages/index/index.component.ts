import { AfterViewInit, Component, ViewChild, ElementRef } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ViewportScroller } from '@angular/common';

@Component({
    selector: 'index',
    imports: [NavBarComponent],
    templateUrl: './index.component.html',
    styleUrl: './index.component.css'
})
export class IndexComponent implements AfterViewInit {
    constructor(private viewportscroller: ViewportScroller) {
        gsap.registerPlugin(ScrollTrigger)
    }

    @ViewChild('taglinecontainer')
    tagline_container!: ElementRef;

    @ViewChild('containerbelow')
    containerbelow!: ElementRef;

    ngAfterViewInit(): void {
        
    }

    scrollToSection(section_id: string): void {
        this.viewportscroller.scrollToAnchor(section_id);
    }
}
