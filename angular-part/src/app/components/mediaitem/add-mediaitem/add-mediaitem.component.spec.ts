import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMediaitemComponent } from './add-mediaitem.component';

describe('AddMediaitemComponent', () => {
  let component: AddMediaitemComponent;
  let fixture: ComponentFixture<AddMediaitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMediaitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMediaitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
