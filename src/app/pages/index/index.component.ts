import { AfterViewInit, Component, ViewChild, ElementRef, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { MyFooterComponent } from '../../components/my-footer/my-footer.component';
import { EffectCards } from 'swiper/modules';

@Component({
    selector: 'index',
    imports: [MyFooterComponent],
    templateUrl: './index.component.html',
    styleUrl: './index.component.css',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IndexComponent implements AfterViewInit {
    constructor(private viewportscroller: ViewportScroller) { }

    @ViewChild('taglinecontainer')
    tagline_container!: ElementRef;

    @ViewChild('containerbelow')
    containerbelow!: ElementRef;

    ngAfterViewInit(): void {

    }

    scrollToSection(section_id: string): void {
        this.viewportscroller.scrollToAnchor(section_id);
    }

    testimonials: any[] = [
        {
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptatem neque maxime magnam vel repudiandae totam asperiores! Enim maxime dolore explicabo quaerat quisquam optio, tenetur neque? Voluptatum totam unde velit.',
            citer: 'James Samuel'
        },
        {
            text: 'Lorem ipsum dolor sit amet consectetur akhs;asdhfaksdakscdamdklmadcldfopwrioewq[owe oweriewro ] wer  wrewffadAFWER345EWF SDFadf velit.',
            citer: 'ABC XYZ'
        }
    ]
}
