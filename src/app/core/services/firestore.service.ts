import {Injectable} from '@angular/core';
import {Observable, pipe} from 'rxjs';
import {map} from 'rxjs/operators';
import * as firebase from 'firebase/app';
import {AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection} from '@angular/fire/firestore';

type CollectionPredicate<T> = string | AngularFirestoreCollection<T>;
type DocPredicate<T> = string | AngularFirestoreDocument<T>;

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private afs: AngularFirestore) {
  }

  col<T>(ref: CollectionPredicate<T>, queryFn?): AngularFirestoreCollection<T> {
    return typeof ref === 'string' ? this.afs.collection<T>(ref, queryFn) : ref;
  }

  doc<T>(ref: DocPredicate<T>): AngularFirestoreDocument<T> {
    return typeof ref === 'string' ? this.afs.doc<T>(ref) : ref;
  }

  doc$<T>(ref: DocPredicate<T>): Observable<T> {
    return this.doc(ref).snapshotChanges().pipe(
      map(doc => {
        return doc.payload.data() as T;
      })
    );
  }

  col$<T>(ref: CollectionPredicate<T>, queryFn?): Observable<T[]> {
    return this.col(ref, queryFn).snapshotChanges().pipe(
      map(docs => {
        return docs.map(a => a.payload.doc.data()) as T[];
      })
    );
  }

  colWithIds$<T>(ref: CollectionPredicate<T>, queryFn?): Observable<any[]> {
    return this.col(ref, queryFn).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data: Object = a.payload.doc.data();
          const id: string = a.payload.doc.id;
          return {id, ...data};
        });
      })
    );
  }

  update<T>(ref: DocPredicate<T>, data: any): any {
    return this.doc(ref).update({
      ...data
    });
  }

  set<T>(ref: DocPredicate<T>, data: any): any {
    return this.doc(ref).set({
      ...data
    });
  }

  setMerge<T>(ref: DocPredicate<T>, data: any): any {
    return this.doc(ref).set({
      ...data
    }, {merge: true});
  }

  add<T>(ref: CollectionPredicate<T>, data: any): any {
    return this.col(ref).add({
      ...data
    });
  }

  delete<T>(ref: DocPredicate<T>): any {
    return this.doc(ref).delete();
  }

  get timestamp(): any {
    return firebase.default.firestore.FieldValue.serverTimestamp();
  }

  get id(): string {
    return this.afs.createId();
  }

}
