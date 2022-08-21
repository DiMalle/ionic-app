import { Component } from '@angular/core';
//import {, AngularFirestoreAuth } from '@angular/fire/compat/firestore';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  dataUser = {
    email: '',
    password: ''

 };
connected:boolean;

constructor(
  //public afAuth: AngularFirestoreAuth
  ) {
   // this.afAuth.authstate.subscribe( auth  =>{
     // if (!auth){
        console.log('non connecte');
        this.connected = false;
      }
     // else{
       // console.log('connecte');
        //this.connected = true;
      }

    //})
  //}


  //login(){
    //console.log('email:'  + this.dataUser.email)
    //console.log('password:' + this.dataUser.password) 
//this.afAuth.auth.signInWidthEmailAndPassword(this.dataUser.email,this.dataUser.password);
  //}

//}
