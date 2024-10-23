// scroll-magic.service.ts
import { Injectable } from '@angular/core';
import { gsap } from 'gsap';
import ScrollMagic from 'scrollmagic';

@Injectable({
  providedIn: 'root'
})
export class ScrollMagicService {
  private controller: ScrollMagic.Controller;

  constructor() {
    this.controller = new ScrollMagic.Controller();
  }

  createScene(triggerElement: string, duration: number, tween: any): ScrollMagic.Scene {
    return new ScrollMagic.Scene({
      triggerElement: triggerElement,
      duration: duration
    })
      .setTween(tween)
      .addTo(this.controller);
  }
}
