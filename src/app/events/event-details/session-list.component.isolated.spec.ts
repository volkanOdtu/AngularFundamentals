import { SessionListComponent } from "./session-list.component";
import { ISession } from 'src/app/shared/event.model';


describe('SessionListComponent' ,() => {
    let component: SessionListComponent;
    let mockAuthService ;

    beforeEach(()=>{
        component= new SessionListComponent(mockAuthService );

    })

    describe('ngOnChanges' ,()=>{
        it('should filter the sessions correctly',()=>{

            component.sessions= <ISession[]>[
                {name:'session 1' ,level:'intermediate'} ,
                {name:'session 2' ,level:'intermediate'} ,
                {name:'session 3' ,level:'beginner'}                 
            ];

            component.filterBy = "intermediate";
            component.sortBy = 'name';
            //component.ngOnChanges();
        })
    })
})

