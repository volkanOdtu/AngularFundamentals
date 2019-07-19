import { Injectable } from '@angular/core';
import { IUser } from './user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class AuthService{
    currentUser:IUser

    constructor(private http:HttpClient){
       
    }
    loginUser(userName:string ,password:string )
    {
        let loginInfo = {username:userName ,password:password };
        let options = { headers: new HttpHeaders({'Content-Type': 'application/json'}) }

        return this.http.post('/api/login' ,loginInfo ,options).
            pipe(tap( data =>{
                this.currentUser = <IUser>data['user']
            } )) 
            .pipe(catchError(err =>{
                return of(false);
            } )) 
        ;
        /*
        this.currentUser = {
            id:1 ,
            userName:userName,
            firstName : 'John',
            lastName:'Selam'
        }*/
    }

    isAuthenticated(){
        return !!this.currentUser;
    }

    checkAuthenticationStatus()
    {
        this.http.get('/api/currentIdentity')
        .pipe(tap( data => {
            if( data instanceof Object){
                this.currentUser = <IUser>data;
            }
        }) ).subscribe();
    }

    updateCurrentUser( firstName:string , lastName :string )
    {
        let options = { headers: new HttpHeaders({'Content-Type': 'application/json'}) }


        this.currentUser.firstName =  firstName;
        this.currentUser.lastName =  lastName;        

        return this.http.put(`/api/users/${this.currentUser.id}`,this.currentUser ,options );
    }

    logout(){
        this.currentUser =undefined; //client side logout mus
        let options = { headers: new HttpHeaders({'Content-Type': 'application/json'}) }
        //api call logout 
        return this.http.post('/api/logout', {} ,options) ;
    }
}