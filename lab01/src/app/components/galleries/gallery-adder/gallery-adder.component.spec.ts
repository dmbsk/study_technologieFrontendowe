import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryAdderComponent } from './gallery-adder.component';

describe('GalleryAdderComponent', () => {
  let component: GalleryAdderComponent;
  let fixture: ComponentFixture<GalleryAdderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryAdderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
