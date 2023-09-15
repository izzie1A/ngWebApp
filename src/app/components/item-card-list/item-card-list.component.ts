import { Component, Input, inject } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AuthService } from "src/app/services/auth.service";
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { FirebaseControlService, tItem } from "src/app/services/firebase-control.service";
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-item-card-list',
  templateUrl: './item-card-list.component.html',
  styleUrls: ['./item-card-list.component.css']
})
export class ItemCardListComponent {
  @Input() address: string = 'undefinded';
  @Input() collection: any;

  firestore: Firestore = inject(Firestore);
  item$: Observable<any[]> | undefined;
  collectionArray: any[] = [
    'test',
  ];
  constructor(private fbS: FirebaseControlService) {
    this.address = 'test'
    this.item$ = collectionData(collection(this.firestore, this.address));

    this.fbS.deleteDoc(this.address, '0Undefinded').then((a) => {
      this.createEmpty();
    }
    );
  }

  createEmpty() {
    let x = new tItem('undefinded', 'undefinded');
    let imgUrl = 'https://picsum.photos/200/300'
    let price =faker.commerce.price()
    let emptyObj = {
      createTime: Date.now(),
      id: '0Undefinded',
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: price,
      fileArray: [],
      tagArray: [price,faker.commerce.productAdjective(), faker.commerce.productAdjective(), faker.commerce.productMaterial()],
      imageArray: [imgUrl, imgUrl, imgUrl],
    }
    this.fbS.createDoc(this.address, emptyObj.id, emptyObj);
  }

  switchCollection(address: string) {
    this.address = address;
    const itemCollection = collection(this.firestore, this.address);
    this.item$ = collectionData(itemCollection);
  }
}
