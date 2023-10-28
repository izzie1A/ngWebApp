import { Component, Input, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FirebaseControlService } from 'src/app/services/firebase-control.service'
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  @Input() address: string = 'undefinded';

  firestore: Firestore = inject(Firestore);
  itemArray: any = [];


  constructor(private fbS: FirebaseControlService) {
    this.address = 'citiesloreamCollection';

    this.initialize();

  }
  async initialize() {
    let x = await this.fbS.queryCondition(this.address, 3, "name", "!=", 'null');
    console.log(x);
    this.itemArray = x;
  }
}
