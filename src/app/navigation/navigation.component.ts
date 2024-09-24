import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipDefaultOptions } from '@angular/material/tooltip';
// import { Popover, Tooltip } from 'bootstrap';

export const myCustomTooltipDefaults: MatTooltipDefaultOptions = {
  showDelay: 500,
  hideDelay: 1000,
  touchendHideDelay: 0,
};

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  providers: [
    { provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults },
  ],
})
export class NavigationComponent implements AfterViewInit {
  isHandset$: Observable<boolean>;
  value = 'contacto@alseguros.co';
  correo = 'El correo ha sido copiado en el portapapeles';
  menuIsActive = true;

  // @ViewChild('popover') popoverElement: ElementRef;

  // popover: Popover;

  isCollapseActive: boolean = false; 
  
  constructor(private breakpointObserver: BreakpointObserver) {
    this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe(
        map(result => result.matches),
        shareReplay()
      );
  }

  // Método para alternar la clase del menú
  toggleMenu() {
    this.menuIsActive = !this.menuIsActive;
  }

  ngAfterViewInit() {
    // const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    // tooltipTriggerList.forEach((tooltipTriggerEl) => {
    //   new Tooltip(tooltipTriggerEl);
    // });

    // const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    // popoverTriggerList.forEach((popoverTriggerEl) => {
    //   new Popover(popoverTriggerEl);
    // });
  }

  // Método para alternar la clase ._on en la sección collapse_1
  toggleCollapse() {
    this.isCollapseActive = !this.isCollapseActive;
  }
}
