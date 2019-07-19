import { Component ,Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from '../shared/event.model';

@Component({
    selector:'event-thumbnail',
    template:`
    <div [routerLink] ="['/events' ,event.id]"  class ="well hoverwell thumbnail">
        <h2>{{ event.name | uppercase }} </h2>
        <div> Date:{{event.date}}</div>
        <div> Time:{{event.time}}</div>
        <div> Price: \${{event.date}}</div>                                                                                                                                                                                                 
        <div >
            <span>Location: {{event?.location?.address}}</span>            
            <span class="pad-left" >Location: {{event?.location?.city}} ,{{event?.location?.country}}</span>            
        </div>              
    </div>       
    `,
    styles:[`
        .green { color:#003300 !impportant ;}
        .bold { font-weight:bold;}        
        .thumbnail { min-height: 210px;}        
        .well div { color:#bbb; }
        .pad-left { margin-left:10px ; }
    `]
})
export class EventThumbnailComponent{
    @Input() event:IEvent

    getStartTimeClass():any{
        if( this.event && this.event.time === '8:00 am' ){
            return ['green' ,'bold']
        return[]
        }
    }

    getStartTimeStyle(){
        if( this.event && this.event.time === '8:00 am' ){
            return { color:'red' ,'font-weight':'bold' }}
        return{}
        
    }
    
}