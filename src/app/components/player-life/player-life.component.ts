import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Player } from '../../models/player.model';

@Component({
  selector: 'app-player-life',
  templateUrl: './player-life.component.html',
  styleUrls: ['./player-life.component.scss']
})
export class PlayerLifeComponent implements OnInit, OnChanges {
  @Input() public player: Player;
  @Input() public playerLife: number;

  public firstCall: boolean = true;

  constructor() { }

  ngOnInit() {
    this.firstCall = false;
  }

  ngOnChanges() {
    if (!this.firstCall) {
      document.getElementById(this.player.idName).style.width = (this.playerLife.toString() + '%');
    }
  }

}
