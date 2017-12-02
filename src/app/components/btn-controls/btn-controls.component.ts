// natives
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btn-controls',
  template: `
    <div class="btn-controls">
      <button type="button" (click)="restartGame()" class="btn" id="restart">Reiniciar</button>
      <button type="button" (click)="alterNames()" class="btn" id="alterNames">Alterar Nomes</button>
    </div>
  `
})
export class BtnControlsComponent implements OnInit {

  // evento para reiniciar o jogo
  @Output() public restart: EventEmitter<boolean> = new EventEmitter<boolean>();
  // evento para alterar o nome
  @Output() public alter: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() { }

  // função que emite o evento de reiniciar o jogo
  public restartGame(): void {
    this.restart.emit(true);
  }

  // função que emite o evento para abrir a tela home 
  public alterNames(): void {
    this.alter.emit(true);
  }

}
