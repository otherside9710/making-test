import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NofoundPageComponent } from './nofound-page.component';

describe('NofoundPageComponent', () => {
  let component: NofoundPageComponent;
  let fixture: ComponentFixture<NofoundPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NofoundPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NofoundPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
