import { Component, inject, NgZone } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { register } from 'swiper/element/bundle';
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, NavBarComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'my-portfolio';

    constructor() {
        const zone = inject(NgZone);

        zone.runOutsideAngular(() => {
            register();
            gsap.registerPlugin(ScrollTrigger)
        })
    }
}
