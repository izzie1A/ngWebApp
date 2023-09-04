import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { doc, setDoc } from "firebase/firestore";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  item$: Observable<any[]>;
  firestore: Firestore = inject(Firestore);
  title = 'ngWebApp';

  constructor() {
    const itemCollection = collection(this.firestore, 'test');
    this.item$ = collectionData(itemCollection);
    
    this.t('undefinded', 'undefined','');
  }

  async tSetDoc(address:string,id:string,content:any){
    await setDoc(doc(this.firestore, address, id),content);
  }


  async t(address:string,id:string,content:any) {
    let x = new tItem('undefinded', 'undefined');

    const tItemConverter = {
      toFirestore: (tItem: tItem) => {
        // :any potential threth
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

    const ref = doc(this.firestore, "test",  "USS").withConverter(tItemConverter);
    await setDoc(ref,x);
  }
}

interface tFile {
  name: string;
  id: string;
}

interface ui {
  expand:boolean;
  editMode:boolean;
}
class tItem implements tFile {
  name: string;
  id: string;
  image: any[] = [];
  constructor(name: string, id: string) {
    this.name = name;
    this.id = id;
  }
}


