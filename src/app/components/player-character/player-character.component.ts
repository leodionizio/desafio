import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../../models/player.model';

@Component({
  selector: 'app-player-character',
  templateUrl: './player-character.component.html',
  styleUrls: ['./player-character.component.scss']
})
export class PlayerCharacterComponent implements OnInit {
  @Input() public player: Player;
	@Input() public playerHitting: Player;
  
  constructor() { }

  ngOnInit() {
  }

  public playerHittingClass(): string {
    let className: string;

    this.playerHitting && this.playerHitting.idName === 'playerOne' 
    ? className = 'playerOneHitting'
    : this.playerHitting && this.playerHitting.idName === 'playerTwo' 
    ? className = 'playerTwoHitting' 
    : className = '' 

    return className;
  }

}
