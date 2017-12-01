import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnControlsComponent } from './btn-controls.component';

describe('BtnControlsComponent', () => {
  let component: BtnControlsComponent;
  let fixture: ComponentFixture<BtnControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
