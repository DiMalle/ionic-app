import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat' 
import { AngularFireAuthModule } from '@angular/fire/compat/auth' 
import {AngularFireDatabaseModule} from '@angular/fire/compat/database' 
import {AngularFirestoreModule} from '@angular/fire/compat/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyA1ctKrin3TtlKByzWIxzr269LUH1if1Ys",
  authDomain: "appagreco.firebaseapp.com",
  projectId: "appagreco",
  storageBucket: "appagreco.appspot.com",
  messagingSenderId: "544255210758",
  appId: "1:544255210758:web:6893f83531248e4adf9a87",
  measurementId: "G-2WWKXVHFPN"
};


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
     IonicModule.forRoot(),
      AppRoutingModule,
      AngularFireModule.initializeApp(firebaseConfig),
      AngularFireAuthModule,
      AngularFireDatabaseModule,
      AngularFirestoreModule
    ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
