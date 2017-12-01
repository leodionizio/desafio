import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerLifeComponent } from './player-life.component';
import { Player } from '../../models/player.model';

describe('PlayerLifeComponent', () => {
  let component: PlayerLifeComponent;
  let fixture: ComponentFixture<PlayerLifeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerLifeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerLifeComponent);
    fixture.componentInstance.player = new Player(
      'playerOne',
      '',
      100,
      'life-bar-player-one',
      'assets/player/player1.png',
      'assets/player/player1-behit.png',
    );
    fixture.componentInstance.playerLife = 100;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Devera criar o componente PlayerLife', () => {
    expect(component).toBeTruthy();
  });

  describe('Smoke Test Components', () => {

    it('Devera possuir uma variavel player do tipo `Player`', () => {
      expect(component.player).toBeTruthy();
      expect(typeof (component.player)).toBeTruthy('Player');
    });

    it('Devera possuir uma variavel playerLife contendo um valor numerico', () => {
      expect(component.playerLife).toBeTruthy();
      expect(typeof (component.playerLife)).toBeTruthy('number');
    });

  })

});
