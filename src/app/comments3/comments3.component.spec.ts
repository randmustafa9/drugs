import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comments3Component } from './comments3.component';

describe('Comments3Component', () => {
  let component: Comments3Component;
  let fixture: ComponentFixture<Comments3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comments3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comments3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
