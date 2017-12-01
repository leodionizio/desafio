import { Player } from './../../models/player.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btn-hit',
  templateUrl: './btn-hit.component.html',
  styleUrls: ['./btn-hit.component.scss']
})
export class BtnHitComponent implements OnInit {
  @Output() public hit: EventEmitter<Player> = new EventEmitter<Player>();

  @Input() public player: Player;

  constructor() { }

  ngOnInit() { }

  public hitting(): void {
    this.hit.emit(this.player);
  }
}
