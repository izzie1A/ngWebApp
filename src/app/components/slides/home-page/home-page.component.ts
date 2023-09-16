import { Component, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FirebaseControlService } from 'src/app/services/firebase-control.service'
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  item$: Observable<any[]>;
  firestore: Firestore = inject(Firestore);
  
  constructor(fbSerice: FirebaseControlService) {
    this.item$ = collectionData(collection(this.firestore, 'cities'));
  }
}
