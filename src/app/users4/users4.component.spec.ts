import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Users4Component } from './users4.component';

describe('Users4Component', () => {
  let component: Users4Component;
  let fixture: ComponentFixture<Users4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Users4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Users4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
