import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaitemDetailsComponent } from './mediaitem-details.component';

describe('MediaitemDetailsComponent', () => {
  let component: MediaitemDetailsComponent;
  let fixture: ComponentFixture<MediaitemDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaitemDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaitemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
