import { Component, OnInit, OnDestroy } from '@angular/core';
import Lenis from '@studio-freight/lenis';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private lenis!: Lenis;
  title = 'education';

  ngOnInit(): void {
    this.lenis = new Lenis({
      lerp: 0.1,
    });


    setTimeout(() => {
      const animation1 = document.querySelector('header._header');
      if (animation1) {
        animation1.classList.add('_move_1');
        // console.log('Clase ._move agregada al elemento ._home._1');
      } else {
        console.error('No se encontró ningún elemento con las clases ._home._1');
      }
    }, 500); // Puedes ajustar el tiempo aquí

    // Función de animación continua
    const raf = (time: number) => {
      this.lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }

  ngOnDestroy(): void {
    // Destruye la instancia de Lenis al destruir el componente
    if (this.lenis) {
      this.lenis.destroy();
    }
  }
}
