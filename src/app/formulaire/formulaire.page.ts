import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';



@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.page.html',
  styleUrls: ['./formulaire.page.scss'],
})
export class FormulairePage implements OnInit {

  itemsCollect: AngularFirestoreCollection;
  items: Observable<any[]>;
  firebasematricule:string;
  firebasenom:string;
  firebaseprenom:string;
  firebasesexenom:string;
  firebaseanneeexp:string;
  firebasesituationmatr:string;
  firebasenbretra:string;
  firebasesite:string;
  firebasevillage:string;
  firebasesuprfice:string;
  firebaseculture:string;
  firebaseproduit:string;
  firebasegeolos:string;



  constructor( public firestore:AngularFirestore) { }

  ngOnInit() {
    this.getData()}

    getData() {

      this.itemsCollect = this.firestore.collection('users'); //donnee la collection user à itemCollect
    this.items = this.itemsCollect.valueChanges();
    console.log(this.items);
    }
  }


