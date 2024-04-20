import { Directive, ElementRef, HostBinding, HostListener, OnInit,Renderer2 } from "@angular/core";

@Directive({
  selector: '[setBorder]',
})
export class setBorder implements OnInit {
  constructor(public element: ElementRef, public renderer: Renderer2) {
    console.log('Directive Constructor called');
  }
  text: string = 'Hello world!';
  @HostBinding('style.backgroundColor') color: string;
  ngOnInit() {
    // this.element.nativeElement.style.border = '5px solid black';
    // this.element.nativeElement.style.borderRadius = '5px';
    this.renderer.setAttribute(
      this.element.nativeElement,
      'title',
      'This is product card view'
    );
    // this.backgroundColor = '#FFFFFF';
  }

  @HostListener('mouseover') onMouseOver() {
    console.log('OnMouseOver');
    this.renderer.setStyle(
      this.element.nativeElement,
      'border',
      '5px solid black'
    );
    this.renderer.setStyle(this.element.nativeElement, 'border-radius', '10px');
    this.color = 'burlywood';
  }

  @HostListener('mouseout') onmouseout() {
    this.renderer.setStyle(this.element.nativeElement, 'border', 'none');
    this.color = 'white';
  }
}

///Renderer2
//<div> this is my div</div> ==> <div> this is my div</div>9()