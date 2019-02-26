import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryFullItemComponent } from './gallery-full-item.component';

describe('GalleryFullItemComponent', () => {
  let component: GalleryFullItemComponent;
  let fixture: ComponentFixture<GalleryFullItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryFullItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryFullItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
