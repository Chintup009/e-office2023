import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Users3Component } from './users3.component';

describe('Users3Component', () => {
  let component: Users3Component;
  let fixture: ComponentFixture<Users3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Users3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Users3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
