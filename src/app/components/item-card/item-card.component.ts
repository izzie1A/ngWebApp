import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { FirebaseControlService } from "src/app/services/firebase-control.service";

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent {
  @Input() item: any = undefined;
  @Input() item$: Observable<any[]> | undefined;

  editmode: boolean = false;
  saved: boolean = false;


  constructor(public firebaseS: FirebaseControlService) {

  }

  editmodeClick() {
    this.editmode ? this.editmode = false : this.editmode = true;
  }

  // loaclItemedit(ref: any, key: any, value: any) {
  //   console.log(ref);
  //   console.log(value);
  //   switch (key) {
  //     case 'id':
  //       ref.id = value;
  //       this.item.id = value;
  //       break;
  //     case 'name':
  //       ref.name = value;
  //       this.item.name = value;
  //       break;
  //   }
  // }

  localAddField(ref: any, key: any, value: any) {
    this.item[key] = value;
  }
  localChangeField(ref: any, key: any, value: any) {
    this.item[value] = this.item[key];
    delete this.item[key];
    console.log(this.item[key]);
  }
  localDeleteField(ref: any, key: any, value: any) {
    this.item[value] = this.item[key];
    delete this.item[key];
    console.log(this.item[key]);
  }


  onFileSelected(event: any, ref: any, key: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        ref[key].push(event.target?.result) ;
      };
    }
  }
  onFileEdit(event: any, ref: any, key: any){

  }
  onFileDelete(event: any, ref: any, key: any){

  }
}
