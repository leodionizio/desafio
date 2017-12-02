// natives
import { Component, OnInit, OnChanges, Input } from '@angular/core';

// models 
import { Player } from '../../models/player.model';

@Component({
  selector: 'app-player-life',
  templateUrl: './player-life.component.html',
})
export class PlayerLifeComponent implements OnInit, OnChanges {
  
  // variavel que recebe o respectivo jogador
  @Input() public player: Player;

  // variavel que recebe o valor da vida do respectivo jogador
  @Input() public playerLife: number;

  // variável para controle da renderização dos componentes da pagina 
  //  para escutar as alterações
  public firstCall: boolean = true;

  constructor() { }

  ngOnChanges() {
    if (!this.firstCall) {
      // atribui ao estilo css a porcentagem referente ao tamanho da barra de vida
      document.getElementById(this.player.idName).style.width = (this.playerLife.toString() + '%');
    }
  }

  ngOnInit() {
    this.firstCall = false;
  }


}
