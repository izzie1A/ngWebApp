import { Injectable, inject } from '@angular/core';
import { Firestore, collectionData, collection, updateDoc, getDocFromCache, deleteDoc } from '@angular/fire/firestore';
import { doc, setDoc } from "firebase/firestore";

@Injectable({
  providedIn: 'root'
})
export class FirebaseControlService {
  firestore: Firestore = inject(Firestore);
  constructor() { }

  async createDoc(address: string, id: string, content: any) {
    console.log('created',content)
    return await setDoc(doc(this.firestore, address, id), content);
  }
  async readDoc(address: string, id: string) {
    const docRef = doc(this.firestore, address, id);
    try {
      const doc = await getDocFromCache(docRef);
      console.log("Cached document data:", doc.data());
      return doc
    } catch (e) {
      console.log("Error getting cached document:", e);
      return e
    }
  }
  async updateDoc(address: string, id: string, content: any) {
    const washingtonRef = doc(this.firestore, address, id);
    await updateDoc(washingtonRef, content);
  }
  async deleteDoc(address: string, id: string) {
    console.log(address, id);
    await deleteDoc(doc(this.firestore, address, id));
    await console.log(deleteDoc(doc(this.firestore, address, id)));
  }

  async setCustomFile() {
    let x = new tItem('undefinded', 'undefined');
    // :any potential threth
    const tItemConverter = {
      toFirestore: (tItem: tItem) => {
        return {
          name: tItem.name,
          id: tItem.id,
        };
      },
      // :any potential threth
      fromFirestore: (snapshot: any, options: any) => {
        const data = snapshot.data(options);
        return new tItem(data.name, data.id);
      }
    }
    const ref = doc(this.firestore, "test", "USS").withConverter(tItemConverter);
    await setDoc(ref, x);
  }
}

interface tFile {
  name: string;
  id: string;
}
export class tItem implements tFile {
  name: string;
  id: string;
  image: any[] = [];
  constructor(name: string, id: string) {
    this.name = name;
    this.id = id;
  }
}
