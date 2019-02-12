import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comments4Component } from './comments4.component';

describe('Comments4Component', () => {
  let component: Comments4Component;
  let fixture: ComponentFixture<Comments4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comments4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comments4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
