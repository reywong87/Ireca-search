import {inject, Injectable} from '@angular/core';
import {addDoc, collection, collectionData, deleteDoc, doc, Firestore, updateDoc} from "@angular/fire/firestore";
import {toSignal} from "@angular/core/rxjs-interop";
import {Observable} from "rxjs";

export interface ITreatment {
  id: string;
  suffering: string;
  treatment: string;
}

export type TreatmentCreate = Omit<ITreatment, 'id'>;

const PATH = 'treatments';

@Injectable({
  providedIn: 'root'
})
export class TreatmentService {
  private _firestore = inject(Firestore);
  private _collection = collection(this._firestore, PATH);
  
  getTreatments = toSignal(collectionData(this._collection, {idField: 'id'}) as Observable<ITreatment[]>, {initialValue: []});
  
  createTreatment(treatment: TreatmentCreate) {
    return addDoc(this._collection, treatment);
  }
  
  updateTreatment(id: string, data: Partial<TreatmentCreate>) {
    const docRef = doc(this._collection, id);
    return updateDoc(docRef, data);
  }
  
  deleteTreatment(id: string) {
    const docRef = doc(this._collection, id);
    return deleteDoc(docRef);
  }
}
