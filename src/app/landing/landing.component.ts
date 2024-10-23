import { Component, OnInit, AfterViewInit } from '@angular/core';
import Splide from '@splidejs/splide';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger); // Esto debe estar aquí para registrar el plugin


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


  ngAfterViewInit(): void {

    setTimeout(() => {
      const animation1 = document.querySelector('._landing._1');
      if (animation1) {
        animation1.classList.add('_move_1');
        // console.log('Clase ._move agregada al elemento ._home._1');
      } else {
        console.error('No se encontró ningún elemento con las clases ._home._1');
      }
    }, 500); // Puedes ajustar el tiempo aquí



    gsap.to('section._landing._1 figure._media img', { 
      // opacity: 1, 
      y: '6%', 
      // scale: 1, // Cambia el tamaño al 150%
      // rotation: 45, // Rotación en grados
      // backgroundColor: '#FF6347', // Cambia el color de fondo
      // borderRadius: '50%', // Cambia el radio de borde para hacerlo circular
      duration: 2, 
      ease: 'cubic.inOut',
      scrollTrigger: {
        trigger: '#trigger_home_1_1',
        start: 'bottom bottom',
        end: 'bottom top',
        scrub: true,
        // markers: true // Activa los indicadores de ScrollTrigger
      }
    });
    gsap.to('section._landing._1 figure._detail', { 
      // opacity: 1, 
      rotate: '180deg', 
      scale: 1.3,
      // scale: 1, // Cambia el tamaño al 150%
      // rotation: 45, // Rotación en grados
      // backgroundColor: '#FF6347', // Cambia el color de fondo
      // borderRadius: '50%', // Cambia el radio de borde para hacerlo circular
      duration: 1, 
      ease: 'cubic.inOut',
      scrollTrigger: {
        trigger: '#trigger_home_1_1',
        start: 'bottom bottom',
        end: 'bottom top',
        scrub: true,
        // markers: true // Activa los indicadores de ScrollTrigger
      }
    });
    gsap.to('section._landing._2', { 
      scrollTrigger: {
        trigger: '#trigger_home_2_1', // Cambia el trigger a otro elemento
        start: 'top center',
        end: 'top top',
        scrub: true,
        // markers: true,
        onEnter: () => document.querySelector('section._landing._2')?.classList.add('_move_1')
        // onLeave: () => document.querySelector('section._landing._2')?.classList.remove('_move_1')
        // onEnterBack: () => document.querySelector('.target-element')?.classList.remove('_move_1'),
        // onLeaveBack: () => document.querySelector('.target-element')?.classList.remove('_move_1')
      }
    });
    gsap.to('section._landing._3', { 
      scrollTrigger: {
        trigger: '#trigger_home_3_1', // Cambia el trigger a otro elemento
        start: 'top center',
        end: 'top top',
        scrub: true,
        // markers: true,
        onEnter: () => document.querySelector('section._landing._3')?.classList.add('_move_1')
      }
    });
    gsap.to('section._landing._4', { 
      scrollTrigger: {
        trigger: '#trigger_home_4_1', // Cambia el trigger a otro elemento
        start: 'top center',
        end: 'top top',
        scrub: true,
        // markers: true,
        onEnter: () => document.querySelector('section._landing._4')?.classList.add('_move_1')
      }
    });
    gsap.to('section._landing._5', { 
      scrollTrigger: {
        trigger: '#trigger_home_5_1', // Cambia el trigger a otro elemento
        start: 'top center',
        end: 'top top',
        scrub: true,
        // markers: true,
        onEnter: () => document.querySelector('section._landing._5')?.classList.add('_move_1')
      }
    });

    gsap.to('section._landing._4 figure._pic img', { 
      // opacity: 1, 
      y: '15%', 
      // scale: 1, // Cambia el tamaño al 150%
      // rotation: 45, // Rotación en grados
      // backgroundColor: '#FF6347', // Cambia el color de fondo
      // borderRadius: '50%', // Cambia el radio de borde para hacerlo circular
      duration: 3, 
      ease: 'cubic.inOut',
      scrollTrigger: {
        trigger: '#trigger_home_4_1',
        start: 'bottom center',
        end: 'bottom top',
        scrub: true,
        // markers: true // Activa los indicadores de ScrollTrigger
      }
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
