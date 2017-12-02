// natives
import { Component, OnInit, Input } from '@angular/core';

// models
import { Player } from '../../models/player.model';

@Component({
  selector: 'app-player-character',
  templateUrl: './player-character.component.html',
})
export class PlayerCharacterComponent implements OnInit {
  
  // variavel que recebe o respectivo jogador
  @Input() public player: Player;

  // variavel que recebe o jogador que esta atacando
	@Input() public playerHitting: Player;
  
  constructor() { }

  ngOnInit() {
  }

  // função que retorna uma classe css de acordo com o jogador
  // que está atacando e/ou sendo atacado
  public playerHittingClass(): string {
    
    // variavel que armazena a classe css
    let className: string;

    // verifica qual jogador esta ataccando
    this.playerHitting && this.playerHitting.idName === 'playerOne' 
    ? className = 'playerOneHitting'
    : this.playerHitting && this.playerHitting.idName === 'playerTwo' 
    ? className = 'playerTwoHitting' 
    : className = '' 

    // retorna a classe css
    return className;
  }

}
