// natives
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// models
import { Player } from './../../models/player.model';

@Component({
  selector: 'app-btn-hit',
  template: `
    <div align="center" [class]="player.idName">
      <button class="btn-hit" (click)="hitting()"></button>
    </div>
`
})
export class BtnHitComponent implements OnInit {

  // evento que faz o jogador atacar
  @Output() public hit: EventEmitter<Player> = new EventEmitter<Player>();

  // variavel que recebe o respectivo jogador
  @Input() public player: Player;

  constructor() { }

  ngOnInit() { }

  // função que emite o evento de atacar passando o jogador atacante
  public hitting(): void {
    this.hit.emit(this.player);
  }
}
