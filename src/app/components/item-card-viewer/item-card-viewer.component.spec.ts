import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCardViewerComponent } from './item-card-viewer.component';

describe('ItemCardViewerComponent', () => {
  let component: ItemCardViewerComponent;
  let fixture: ComponentFixture<ItemCardViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemCardViewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemCardViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
