// natives
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// models
import { Player } from '../../models/player.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  // variavel que recebe o primeiro jogador
  @Input() public playerOne: Player;

  // variavel que recebe o segundo jogador
  @Input() public playerTwo: Player;

  // evento que inicia o jogo
  @Output() public start: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() { }

  // função que emite o evento de iniciar o jogo
  public startGame() {
    this.start.emit(true);
  }
}
