import { Directive, ElementRef, OnInit,Renderer2 } from "@angular/core";

@Directive({
  selector: '[setBorder]',
})
export class setBorder implements OnInit {
  constructor(public element: ElementRef, public renderer: Renderer2) {
    console.log('Directive Constructor called');
  }
  ngOnInit() {
    // this.element.nativeElement.style.border = '5px solid black';
    // this.element.nativeElement.style.borderRadius = '5px';
    this.renderer.setStyle(this.element.nativeElement,'border','5px solid black');
    this.renderer.setStyle(this.element.nativeElement,'border-radius','10px');

    this.renderer.setAttribute(this.element.nativeElement,'title','This is product card view')

  }
  
}

///Renderer2
//<div> this is my div</div> ==> <div> this is my div</div>