import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerCharacterComponent } from './player-character.component';
import { Player } from '../../models/player.model';

describe('PlayerCharacterComponent', () => {
  let component: PlayerCharacterComponent;
  let fixture: ComponentFixture<PlayerCharacterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerCharacterComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerCharacterComponent);
    fixture.componentInstance.player = new Player(
      'playerOne',
      '',
      100,
      'life-bar-player-one',
      'assets/player/player1.png',
      'assets/player/player1-behit.png',
    );
    fixture.componentInstance.playerHitting = new Player(
      'playerTwo',
      '',
      0,
      'life-bar-player-two',
      'assets/player/player2.png',
      'assets/player/player2-behit.png',
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Devera criar o componente PlayerCharacter', () => {
    expect(component).toBeTruthy();
  });

  describe('Smoke Test Components', () => {
    
    it('Devera possuir uma variavel player do tipo `Player`', () => {
      expect(component.player).toBeTruthy();
      expect(typeof (component.player)).toBeTruthy('Player');      
    });

    it('Devera possuir uma variavel playerHitting do tipo `Player`', () => {
      expect(component.playerHitting).toBeTruthy();
      expect(typeof (component.playerHitting)).toBeTruthy('Player');
    });

  })

});
