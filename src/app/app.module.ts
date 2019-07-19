import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {EventsListComponent,EventThumbnailComponent ,EventService ,CreateSessionComponent, LocationValidator, EventResolver } from './events/index';
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { JQ_TOKEN, SimpleModalComponent, ModalTriggerDirective } from './common/index';
import { TOASTR_TOKEN ,Toastr } from './common/toastr.service';

import { EventDetailsComponent } from './events/event-details/event-details.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from 'src/route';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventsListResolver } from './events/events-list-resolver.service';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SessionListComponent } from './events/event-details';
import { CollapsableWellComponent } from './common/collapsible-well.component';
import { HttpClientModule} from '@angular/common/http';

let toastr:Toastr = window['toastr'];
let jQuery = window['$'];


@NgModule({
  imports: [
    BrowserModule,
    FormsModule ,ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule    
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent ,
    EventDetailsComponent,
    NavBarComponent ,
    CreateEventComponent,
    Error404Component ,
    CreateSessionComponent ,
    SessionListComponent,
    CollapsableWellComponent,
    SimpleModalComponent ,
    LocationValidator,
    ModalTriggerDirective
  ],  
  providers:[
      EventService ,
      {provide:TOASTR_TOKEN ,useValue:toastr} ,
      {provide:JQ_TOKEN ,useValue:jQuery} ,      
      EventResolver,
      EventsListResolver,      
      AuthService,
    { provide:'canDeactivateCreateEvent',
      useValue: checkDirtyState
  } ]
      ,
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
export function checkDirtyState(component:CreateEventComponent)
{ 
  if( component.isDirty)
    return window.confirm('You havent saved this event ,do you really want to cancel?') ;
  
    return true;
}