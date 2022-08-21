import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  itemsCollect: AngularFirestoreCollection;
  items: Observable<any[]>;
  firebasenom:string;

  constructor(public firestore : AngularFirestore) {}

  ngOnInit() {
    
    this.getData();
   
  }
  getData(){
    this.itemsCollect = this.firestore.collection('users'); //donnee la collection user à itemCollect
    this.items = this.itemsCollect.valueChanges();
    console.log(this.items);
  }

}
