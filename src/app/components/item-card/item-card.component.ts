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

  backupItem: any;


  constructor(public firebaseS: FirebaseControlService) {
    this.backupItem = this.item;
  }

  editmodeClick(sholderRef: any) {
    if (this.editmode == true) {
      this.editmode = false
      sholderRef.style.backgroundColor = 'var(--green)';
    } else if (this.editmode == false) {
      this.editmode = true
      sholderRef.style.backgroundColor = 'var(--yellow)';
    }
  }
  itemCardControl(sholderRef: any, command: string) {
    switch (command) {
      case 'save':
        this.editmode = false
        sholderRef.style.backgroundColor = 'var(--green)';
        break;
        case 'close':
        this.editmode = false
        sholderRef.style.backgroundColor = 'var(--yellow)';
        break;
        case 'edit':
        this.editmode? this.editmode = false : this.editmode = true;
        sholderRef.style.backgroundColor = 'var(--yellow)';
        break;
    }
  }


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

  }
  onFilePush(event: any, ref: any, key: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        ref[key].push(event.target?.result);
      };
    }
  }
  onFileEdit(event: any, ref: any, key: any, index: number) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        this.item[key][index] = event.target?.result;
      };
    }
  }
  onFileDelete(event: any, ref: any, key: any, index: number) {
    console.log(event, ref, key, index)
    console.log(ref[key])
    this.item[key].splice(index, 1)
    console.log(ref[key])
  }
  onFileClear(event: any, ref: any, key: any, index: number) {
    console.log(event, ref, key, index)
    console.log(ref[key])
    this.item[key][index] = null
    console.log(ref[key])
  }
}
