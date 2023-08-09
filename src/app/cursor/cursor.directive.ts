import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
@Directive({
  selector: '[appCursor]'
})
export class CursorDirective {

  constructor(private el: ElementRef,private renderer: Renderer2) { }

  ngOnInit() {
    const imageElement = this.el.nativeElement;
    this.renderer.listen('document', 'mousemove', (event: MouseEvent) => {
      const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      this.renderer.setStyle(imageElement, 'left', event.clientX + scrollX + 'px');
      this.renderer.setStyle(imageElement, 'top', event.clientY + scrollY + 'px');
    });
  }

}
