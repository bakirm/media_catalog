import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaitemListComponent } from './mediaitem-list.component';

describe('MediaitemListComponent', () => {
  let component: MediaitemListComponent;
  let fixture: ComponentFixture<MediaitemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaitemListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaitemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
