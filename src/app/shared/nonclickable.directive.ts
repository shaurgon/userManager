import {Directive, HostListener} from '@angular/core';

@Directive({
    selector: '[appNonClickable]'
})
export class NonclickableDirective {
    @HostListener('click', ['$event'])
    public onClick(event: any): void {
        event.stopPropagation();
    }
}
