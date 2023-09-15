import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { FirebaseControlService } from "src/app/services/firebase-control.service";

import { faker } from '@faker-js/faker';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent {
  // @Input() item: any = undefined;
  @Input() item: Observable<any[]> | any | undefined;

  editmode: boolean = false;
  saved: boolean = false;

  backupItem: any;

  itemCardMode: 'view' | 'viewDetail' | 'edit' | 'keyValue' = 'viewDetail';

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

  itemCardModeSwitch(command: string) {
    switch (command) {
      case 'edit':
        this.itemCardMode = 'edit'
        break;
      case 'viewDetail':
        this.itemCardMode = 'viewDetail'
        break;
      case 'view':
        this.itemCardMode = 'view'
        break;
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
        this.editmode ? this.editmode = false : this.editmode = true;
        sholderRef.style.backgroundColor = 'var(--yellow)';
        break;
    }
  }
  // keyvalue edit

  localAddField( key: any, value: any) {
    this.item[key] = value;
  }
  localChangeField( key: any, value: any) {
    this.item[value] = this.item[key];
    delete this.item[key];
    console.log(this.item[key]);
  }
  localDeleteField( key: any, value: any) {
    this.item[value] = this.item[key];
    delete this.item[key];
    console.log(this.item[key]);
  }

  
  localArrayAdd(ref: any, value: any) {
    this.item[ref].push(value);
  }
  localArrayChange(ref: any, i: number, value:any) {
    this.item[ref][i] = value;
  }
  localArrayDelete(ref: any, i: number) {
    console.log(this.item[ref],i)
    this.item[ref].splice(i, 1);
    console.log(this.item[ref]) }


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
        this.item[index] = event.target?.result;
      };
    }
  }
  onFileDelete(event: any, ref: any, key: any, index: number) {
    console.log(event, ref, key, index)
    console.log(ref[key])
    this.item[key].splice(index, 1);
    console.log(ref[key])
  }
  onFileClear(event: any, ref: any, key: any, index: number) {
    console.log(event, ref, key, index)
    console.log(ref[key])
    this.item[key][index] = null
    console.log(ref[key])
  }


  onFileArraySelected(event: any, ref: any, key: any) {

  }
  onFileArrayPush(address: string, key: any, input: HTMLInputElement) {
    if (!input.files) return
    this.item[key].push('downloading');
    const files: FileList = input.files;
    let fileName = input.value.split("\\").pop();
    let url = address + fileName;
    console.log(address + fileName)
    const storage = getStorage();
    const storageRef = ref(storage, url);
    const uploadTask = uploadBytesResumable(storageRef, files[0]);
    uploadTask.then((snapshotx) => {
      console.log('Uploaded an array!');
      console.log(snapshotx);
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log('File available at', downloadURL);
        this.item[key].pop();
        this.item[key].push(downloadURL);
      }); 
      console.log(url);
      return url;
    });
  }
  onFileArrayEdit(address: string, key: string, i: number, input: HTMLInputElement) {
    if (!input.files) return
    this.item[key][i]='downloading';
    const files: FileList = input.files;
    let fileName = input.value.split("\\").pop();
    let url = address + fileName;
    console.log(address + fileName)
    const storage = getStorage();
    const storageRef = ref(storage, url);
    const uploadTask = uploadBytesResumable(storageRef, files[0]);
    uploadTask.then((snapshotx) => {
      console.log('Uploaded an array!');
      console.log(snapshotx);
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log('File available at', downloadURL);
        this.item[key][i] = downloadURL;
      });
      console.log(url);
      return url;
    });
  }
  onFileArrayDelete(key: any, index: number) {
    console.log(this.item[key])
    this.item[key].splice(index, 1)
    console.log(this.item[key])
  }
  onFileArrayClear(event: any, ref: any, key: any, index: number) {
    console.log(event, ref, key, index)
    console.log(ref[key])
    this.item[key][index] = null
    console.log(ref[key])
  }


}

function getAverageRGB(imgEl: any) {

  var blockSize = 5, // only visit every 5 pixels
    defaultRGB = { r: 0, g: 0, b: 0 }, // for non-supporting envs
    canvas = document.createElement('canvas'),
    context = canvas.getContext && canvas.getContext('2d'),
    data, width, height,
    i = -4,
    length,
    rgb = { r: 0, g: 0, b: 0 },
    count = 0;

  if (!context) {
    return defaultRGB;
  }

  height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
  width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;

  context.drawImage(imgEl, 0, 0);

  try {
    data = context.getImageData(0, 0, width, height);
  } catch (e) {
      /* security error, img on diff domain */alert('x');
    return defaultRGB;
  }

  length = data.data.length;

  while ((i += blockSize * 4) < length) {
    ++count;
    rgb.r += data.data[i];
    rgb.g += data.data[i + 1];
    rgb.b += data.data[i + 2];
  }

  // ~~ used to floor values
  rgb.r = ~~(rgb.r / count);
  rgb.g = ~~(rgb.g / count);
  rgb.b = ~~(rgb.b / count);

  return rgb;

}