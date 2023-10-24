import { inject } from '@angular/core';
import { Component  } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { doc, setDoc } from "firebase/firestore";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  firestore: Firestore = inject(Firestore);
  
  user$: Observable<any>|undefined;
  item$: Observable<any[]>;
  
  title = 'ngWebApp';
  address = 'test';

  constructor(public authS:AuthService,) {
    const itemCollection = collection(this.firestore,this.address);
    this.item$ = collectionData(itemCollection);
  }
  
  createEmpty(){
    setDoc(doc(this.firestore, this.address, 'undefinded'), {
      id:'undefinded',
      name:'undefinded',
      imageArray:[0],
    });
  }

  login(){
    this.authS.googleSignin();
  }

  async tSetDoc(address: string, id: string, content: any) {
    await setDoc(doc(this.firestore, address, id), content);
  }


  async t(address: string, id: string, content: any) {
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
    const ref = doc(this.firestore, "test", "USS").withConverter(tItemConverter);
    await setDoc(ref, x);
  }
}

interface tFile {
  name: string;
  id: string;
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


