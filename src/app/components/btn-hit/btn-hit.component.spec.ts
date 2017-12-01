import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnHitComponent } from './btn-hit.component';

describe('BtnHitComponent', () => {
  let component: BtnHitComponent;
  let fixture: ComponentFixture<BtnHitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnHitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnHitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
