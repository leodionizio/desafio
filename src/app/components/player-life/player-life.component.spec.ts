import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerLifeComponent } from './player-life.component';

describe('PlayerLifeComponent', () => {
  let component: PlayerLifeComponent;
  let fixture: ComponentFixture<PlayerLifeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerLifeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
