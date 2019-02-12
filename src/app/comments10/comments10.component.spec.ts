import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comments10Component } from './comments10.component';

describe('Comments10Component', () => {
  let component: Comments10Component;
  let fixture: ComponentFixture<Comments10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comments10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comments10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
