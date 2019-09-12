import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFullItemComponent } from './new-full-item.component';

describe('NewFullItemComponent', () => {
  let component: NewFullItemComponent;
  let fixture: ComponentFixture<NewFullItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFullItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFullItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
