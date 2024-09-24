import { Component, OnInit } from '@angular/core';
import Splide from '@splidejs/splide';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  progressItems = [
    { currentValue: 0, targetValue: 29, logo: 'assets/imgs/andes.png', name: 'Universidad de los Andes' },
    { currentValue: 0, targetValue: 15, logo: 'assets/imgs/javeriana.png', name: 'Javeriana' }
  ];

  constructor() { }

  ngOnInit(): void {
    new Splide('.splide_1', {
      type: 'loop',
      perPage: 1,
      perMove: 1,
      gap: '200%',
      pagination: false,
      autoplay: true,
    }).mount();

    this.progressItems.forEach((item, index) => {
      this.animateProgress(index);
    });

  }

  animateProgress(index: number) {
    const progressItem = this.progressItems[index];
    const targetValue = progressItem.targetValue;
    let currentValue = 0;
    const interval = setInterval(() => {
      currentValue++;
      progressItem.currentValue = currentValue;
      this.updateCircle(index, currentValue);
      if (currentValue >= targetValue) {
        clearInterval(interval);
      }
    }, 50);
  }
  
  updateCircle(index: number, value: number) {
    const circle = document.querySelectorAll('.progress-circle div[role="progressbar"]')[index] as HTMLElement;

    if (!circle) {
      console.error('No se encontró el elemento progressbar en el índice', index);
      return;
    }

    const radius = 50; // Cambia esto si tienes un valor real para el radio
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (value / 100) * circumference;

    circle.style.strokeDashoffset = `${offset}`;
  }


}
