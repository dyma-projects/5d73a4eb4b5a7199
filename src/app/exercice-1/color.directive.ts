import { Directive, ElementRef, OnInit, Renderer2, HostListener} from '@angular/core';

@Directive({
  selector: '[appColor]'
})

export class ColorDirective implements OnInit {
  
  constructor(private col: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    this.renderer.setStyle(this.col.nativeElement, 'color', 'red')
  }

  @HostListener('window:keyup', ['$event']) keyEvent(event: KeyboardEvent){
    this.renderer.setStyle(this.col.nativeElement, 'color', 'red');
    if (event.key === 'ArrowUp') {
      this.renderer.setStyle(this.col.nativeElement, 'color', 'green');
    } 
    if (event.key === 'ArrowDown') {
      this.renderer.setStyle(this.col.nativeElement, 'color', 'orange');
    }
    if (event.key === 'ArrowRight') {
      this.renderer.setStyle(this.col.nativeElement, 'color', 'blue');
    }
    if (event.key === 'ArrowLeft') {
      this.renderer.setStyle(this.col.nativeElement, 'color', 'purple');
    }
  }
}
