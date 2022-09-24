import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore/";
import { FormFactoryComponent } from "../form-factory/form-factory.component";
import { Unicorn } from '../model/unicorn';

const table = "unicornfactory-28b2a";

@Injectable({
  providedIn: 'root'
})

export class UnicornsService {

  constructor(private firestore: AngularFirestore) { }

  /* Add Unicorn */
  AddUnicorn(unicorn: Unicorn) {
    return new Promise<any>((resolve, reject) => {
      this.firestore.collection(table).add(unicorn)
        .then(res => {
          resolve(res);
        }, err => reject(err));
    });
  }

  /* Get Unicorn list */
  GetUnicornList() {
    return this.firestore.collection(table, ref => ref.orderBy('age', "desc")).snapshotChanges();
  }


}
