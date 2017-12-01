import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { Player } from '../../models/player.model';
import { FormsModule } from '@angular/forms';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [FormsModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    fixture.componentInstance.playerOne = new Player(
      'playerOne',
      '',
      100,
      'life-bar-player-one',
      'assets/player/player1.png',
      'assets/player/player1-behit.png',
    );
    fixture.componentInstance.playerTwo = new Player(
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

  it('Devera criar o componente Home', () => {
    expect(component).toBeTruthy();
  });

  describe('Smoke Test Components', () => {

    it('Devera conter jogador um do tipo `Player`', () => {
      expect(component.playerOne).toBeTruthy();
      expect(typeof (component.playerOne)).toBeTruthy('Player');
    });

    it('Devera conter jogador dois do tipo `Player`', () => {
      expect(component.playerTwo).toBeTruthy();
      expect(typeof (component.playerTwo)).toBeTruthy('Player');
    });

  })

  describe('Teste de funcoes', () => {

    // it('Devera conter o metodo `startGame`', () => {

    //   let spy = spyOn(component, 'startGame').and.callThrough();
    //   expect(spy).toHaveBeenCalled();
    // });

  })

});
