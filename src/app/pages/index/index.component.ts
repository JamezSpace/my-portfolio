import { AfterViewInit, Component, ViewChild, ElementRef } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ViewportScroller } from '@angular/common';
import { MyFooterComponent } from '../../components/my-footer/my-footer.component';

@Component({
    selector: 'index',
    imports: [ MyFooterComponent],
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
