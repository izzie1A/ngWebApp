import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCardDialogComponent } from './item-card-dialog.component';

describe('ItemCardDialogComponent', () => {
  let component: ItemCardDialogComponent;
  let fixture: ComponentFixture<ItemCardDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemCardDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemCardDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
