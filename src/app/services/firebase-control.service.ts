import { Injectable, inject } from '@angular/core';
import { Firestore, collectionData, collection, updateDoc, getDocFromCache, deleteDoc } from '@angular/fire/firestore';
import { addDoc, doc, getDoc, getDocs, limit, orderBy, query, setDoc, where } from "firebase/firestore";
// import { getStorage, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { Storage, getStorage, provideStorage, ref, uploadBytesResumable, getDownloadURL } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class FirebaseControlService {
  firestore: Firestore = inject(Firestore);
  private storage: Storage = inject(Storage);
  constructor() {
  }

  async docSave(address: string, id: string, content: any) {
    const docSnap = await getDoc(doc(this.firestore, address, id));
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      this.updateDoc(address, id, content)
    } else {
      console.log("No such document! new create");
      const docRef = await addDoc(collection(this.firestore, address), content);
      console.log("Document written with ID: ", docRef.id);
    }
  }
  async createDoc(address: string, id: string, content: any) {
    console.log('created', content)
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
    const docRef = doc(this.firestore, address, id);
    await updateDoc(docRef, content);
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
      toFirestore: (tItemHolder: tItem) => {
        return {
          name: tItemHolder.name,
          id: tItemHolder.id,
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

  async fireStorageUploadFile(address: string, input: HTMLInputElement) {
    if (!input.files) return
    const files: FileList = input.files;
    let fileName = input.value.split("\\").pop();
    let url = address + fileName;
    console.log(address + fileName)
    const storage = getStorage();
    const storageRef = ref(storage, url);
    const uploadTask = uploadBytesResumable(storageRef, files[0]);
    uploadTask.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
          case 'success':
            break;
        }
        return
      },
      (error) => {
        return error
      }
    )
  }

  async queryCollection(address: string, id: string, collectionID: string) {
    const q = query(collection(this.firestore, address, id, collectionID), where("population", ">", 100000), orderBy("name"), limit(9));
    const querySnapshot = await getDocs(collection(this.firestore, address, id, collectionID));
    querySnapshot.forEach((doc: { id: any; data: () => any; }) => {
      console.log(doc.id, " => ", doc.data());
    });

  }
  querySubCollection() {
  }

  async getCollection(address:string){
    return collectionData(collection(this.firestore, address));
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
