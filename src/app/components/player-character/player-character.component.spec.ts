import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerCharacterComponent } from './player-character.component';

describe('PlayerCharacterComponent', () => {
  let component: PlayerCharacterComponent;
  let fixture: ComponentFixture<PlayerCharacterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerCharacterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
