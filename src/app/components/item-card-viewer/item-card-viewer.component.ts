import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-card-viewer',
  templateUrl: './item-card-viewer.component.html',
  styleUrls: ['./item-card-viewer.component.css']
})
export class ItemCardViewerComponent {
  @Input() item: any = undefined;
  @Input() itemcardMode: string = '';

  // @Input() item$: Observable<any[]> | undefined;

  editmode: boolean = false;
  saved: boolean = false;

  backupItem: any;

  itemCardMode: 'view' | 'viewDetail' = 'view';

  constructor() {
  }

  itemCardModeSwitch(command: string) {
    switch (command) {
      case 'viewDetail':
        this.itemCardMode = 'viewDetail'
        break;
      case 'view':
        this.itemCardMode = 'view'
        break;
    }
  }
}
