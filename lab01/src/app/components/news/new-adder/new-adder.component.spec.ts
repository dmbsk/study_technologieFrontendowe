import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAdderComponent } from './new-adder.component';

describe('NewAdderComponent', () => {
  let component: NewAdderComponent;
  let fixture: ComponentFixture<NewAdderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAdderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
