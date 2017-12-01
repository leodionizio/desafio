import { Player } from './../../models/player.model';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-panel',
	templateUrl: './panel.component.html',
	styleUrls: ['./panel.component.scss'],
	host: {
		'(document:keydown)': 'handleKeyboardEvents($event)'
	}
})
export class PanelComponent implements OnInit {

	// JOGADOR UM
	public playerOne: Player = new Player(
		'playerOne',
		'',
		100,
		'life-bar-player-one',
		'assets/player/player1.png',
		'assets/player/player1-behit.png',
	);

	// JOGADOR DOIS
	public playerTwo: Player = new Player(
		'playerTwo',
		'',
		0,
		'life-bar-player-two',
		'assets/player/player2.png',
		'assets/player/player2-behit.png',
	);

	public mensagem: string = '';

	// CONTROLE DO ANDAMENTO DO JOGO
	public gameInProgress: boolean = false;
	public gameIsFinished: boolean = false;

	// JOGADOR ATACANTE
	public playerHitting: Player;

	// JOGADOR VENCEDOR
	public playerWinner: string = '';


	constructor() { }

	ngOnInit() { }

	handleKeyboardEvents(event: KeyboardEvent) {
		if (this.gameInProgress) {
			if (event.key === 'd') {
				this.hitting(this.playerOne);
			} else if (event.key === 'l') {
				this.hitting(this.playerTwo);
			}
		}
	}

	public hitting(player: Player): void {
		if (!this.playerWinner) {
			if (player === this.playerOne) {
				this.playerHitting = this.playerOne;
				this.playerTwo.life += 20;
				setTimeout(() => {
					this.playerHitting = undefined;
				}, 300);
				if (this.playerTwo.life === 100) {
					this.endGame(this.playerOne.name);
				}
			} else {
				this.playerHitting = this.playerTwo;
				this.playerOne.life -= 20;
				setTimeout(() => {
					this.playerHitting = undefined;
				}, 300);
				if (this.playerOne.life === 0) {
					this.endGame(this.playerTwo.name);
				}
			}
		}
	}

	public startGame(e): void {
		if (e) {
			this.restartGame(true);
			this.gameInProgress = true;
		}
	}

	public restartGame(e): void {
		if (e) {
			this.playerWinner = '';
			this.gameIsFinished = false;
			this.playerOne.life = 100;
			this.playerTwo.life = 0;
		}
	}

	public alterNames(e): void {
		if (e) {
			this.gameInProgress = false;
			this.gameIsFinished = false;
		}
	}

	public endGame(playerName: string) {
		if (!this.playerWinner) {
			this.playerWinner = playerName;
		}
		setTimeout(() => {
			this.gameIsFinished = true;
		}, 500);
	}
}

