import {Routes} from '@angular/router'
import { EventDetailsComponent } from './app/events/event-details/event-details.component';
import { EventsListComponent } from './app/events/events-list.component';
import { CreateEventComponent } from './app/events/create-event.component';
import { Error404Component } from './app/errors/404.component';
import { EventsListResolver } from './app/events/events-list-resolver.service';
import { CreateSessionComponent } from './app/events/event-details/create-session.component';
import { EventResolver } from './app/events';

export const appRoutes:Routes =[    
    { path:'events/new', component:CreateEventComponent ,canDeactivate:['canDeactivateCreateEvent'] },    
    { path:'events', component:EventsListComponent,resolve:{events:EventsListResolver} },
    { path:'events/:id', component:EventDetailsComponent ,resolve:{event: EventResolver} },
    { path:'404',component:Error404Component  },
    { path:'events/session/new', component: CreateSessionComponent },
    { path:'',redirectTo:'/events',pathMatch:'full' },
    { path:'user',loadChildren:'./user/user.module#UserModule' }
]