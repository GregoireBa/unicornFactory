import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore/";
import { FormFactoryComponent } from "../form-factory/form-factory.component";
import { Unicorn } from '../model/unicorn';

@Injectable({
  providedIn: 'root'
})

export class UnicornsService {

  constructor(private firestore: AngularFirestore) { }

  /* Add Unicorn */
  AddUnicorn(unicorn: Unicorn) {
    return new Promise<any>((resolve, reject) => {
      this.firestore.collection("unicornfactory").add(unicorn)
        .then(res => {
          resolve(res);
        }, err => reject(err));
    });
  }

  // /* Get Unicorn */
  GetUnicorn(id: string) {
    return this.firestore.collection("unicornfactory").doc(id).snapshotChanges();
  }

  /* Get Unicorn list */
  GetUnicornList() {
    return this.firestore.collection("unicornfactory").snapshotChanges();
  }


}
