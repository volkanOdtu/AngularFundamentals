import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../shared';

@Component({
    templateUrl:'create-event.component.html',
    styles: [`
        em{ float:right ;color:#E05C65 ;padding-left:10px ; }
        .error input {background-color:#E3C3C5 ;}
        .error ::-webkit-input-placeholder {color:#999; }
        .error ::-moz-placeholder {color:#999; }
        .error :-moz-placeholder {color:#999; }
        .error :ms-input-placeholder {color:#999; }                
  `]
})
export class CreateEventComponent{
    newEvent
    event:any
    isDirty:boolean =true;
    constructor(private router:Router ,private eventService:EventService ){

    }

    ngOnInit(){
        this.event = {
            name:'Ng Spectacular',
            date: '8/8/2028',
            time: '10am',
            price: 800.00,
            location:{
                address:'456 Happy St',
                city: 'Felicity',
                country:'Turkiye'
            },
            onlineUrl:'http://www.google.com',
            imageUrl:'http://www.google.com/logo.png'            
        }
    }
    saveEvent(formValues)
    {
        //console.log(formValues);
        this.eventService.saveEvent(formValues).subscribe(() => {
            this.isDirty = false;
            this.router.navigate(['/events']);
        }) ;
        
    }
    //Angular in routing service ini kullanicaz geri route etmek icin
    cancel()
    {
        this.router.navigate(['/events']);
    }
}