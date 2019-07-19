import { Component } from '@angular/core';
import { EventService } from 'src/app/shared/event.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ISession, IEvent } from 'src/app/shared/event.model';


@Component({
    templateUrl:'./event-details.component.html',
    styles: [`
        .container { padding-left:20px ;padding-right:20px ;}
        .event-image { height:100px ;}
        a {cursor:pointer }
        `]
})
export class EventDetailsComponent
{
    event:any
    addMode:boolean
    filterBy: string ='all';
    sortBy:string = 'votes';
    
    constructor( private eventService:EventService ,private route:ActivatedRoute)
    {
    }
    ngOnInit()
    {
        //this.event = this.eventService.getEvent(1);
        //this.event = this.eventService.getEvent( +this.route.snapshot.params['id']);

        this.route.data.forEach((data)=>{ 
                this.event = this.route.snapshot.data['event'];
                this.addMode = false;   
            
         } )        
    }

    addSession(){
        this.addMode = true;   
    }

    saveNewSession(session:ISession){

        const nextId = Math.max.apply(null ,this.event.sessions.map(s=>s.id));
        session.id= nextId + 1 ;
        this.event.sessions.push(session);
        this.eventService.updateEvent(this.event);
        this.addMode = false;
    }

    cancelAddSession(){
        this.addMode = false;
    }
}