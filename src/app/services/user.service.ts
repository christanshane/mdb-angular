import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Injectable()
export class UserService {
    usersCollection: AngularFirestoreCollection<any>;
    users:Observable<any[]>;
    userDoc:AngularFirestoreDocument<any>;

  constructor(private afs:AngularFirestore) { 
    this.usersCollection = this.afs.collection('users');
    this.users = this.usersCollection.snapshotChanges().map(changes =>{
      return changes.map(a =>{
        const data = a.payload.doc.data() as any;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  getUsers(){
    return this.afs.collection('users').snapshotChanges().map(changes =>{
      return changes.map(a =>{
        const data = a.payload.doc.data() as any;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  addUser(User:any, id){
    this.usersCollection.doc(id).set(User);
  }

}
