import { OnInit, Directive, Inject, ElementRef, Input } from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';

@Directive({
    selector:'[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {
    private el:HTMLElement;
    @Input('modal-trigger') modalId:string;

    constructor( ref:ElementRef, @Inject(JQ_TOKEN) private $:any )
    {
        this.el = ref.nativeElement;
    }
    
    ngOnInit(): void {
        console.log("burdayiz")
         this.el.addEventListener('click' ,e => {
            this.$(`#${this.modalId}`).modal({})         
    }) 
  }
}