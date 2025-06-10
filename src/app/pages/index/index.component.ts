import { AfterViewInit, Component, ViewChild, ElementRef, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { MyFooterComponent } from '../../components/my-footer/my-footer.component';
import { EffectCards } from 'swiper/modules';
import { ContactMeComponent } from "../../components/contact-me/contact-me.component";

@Component({
    selector: 'index',
    imports: [MyFooterComponent, ContactMeComponent],
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

    sayHiComponentViewClass = signal("closed")

    toggleComponentView(e: any) {
        if (e.target.classList.contains("pseudo-container") || e.target.classList.contains("open-say-hi-container")) this.sayHiComponentViewClass.update(val => val === 'opened' ? 'closed' : 'opened');
    }

    handleViewChange(newValue: string) {
        this.sayHiComponentViewClass.set(newValue);
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
