import { Component, Input, inject } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AuthService } from "src/app/services/auth.service";
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { FirebaseControlService,tItem } from "src/app/services/firebase-control.service";

@Component({
  selector: 'app-item-card-list',
  templateUrl: './item-card-list.component.html',
  styleUrls: ['./item-card-list.component.css']
})
export class ItemCardListComponent {
  @Input() address:string = 'undefinded';
  @Input() collection:any;
  
  firestore: Firestore = inject(Firestore);
  item$: Observable<any[]> | undefined;
  constructor(private fbS:FirebaseControlService) {
    this.address='test'
    const itemCollection = collection(this.firestore,this.address);
    this.item$ = collectionData(itemCollection);
  }
  
  createEmpty(){
    let x = new tItem('undefinded','undefinded');
    this.fbS.createDoc(this.address,x.id,x);
  }
  
  switchCollection(address:string){
    this.address = address;
    const itemCollection = collection(this.firestore,this.address);
    this.item$ = collectionData(itemCollection);
  }
}
