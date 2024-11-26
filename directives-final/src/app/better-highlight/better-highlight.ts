import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[betterHighlight]'
})

export class BetterHighlightDirective implements OnInit {
    // use @input to set default values just like components
    @HostBinding('style.backgroundColor') backgroundColor: string = 'transperent';
    constructor(private renderer: Renderer2, private elRef: ElementRef) { }

    ngOnInit() {
        // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'green');
    }

    @HostListener('mouseenter') mouseOver(eventData: MouseEvent) {
        this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'green');
    }

    @HostListener('mouseleave') mouseLeave(eventData: MouseEvent) {
        // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
        this.backgroundColor = 'blue'
    }
}