// natives
import { Component, OnInit } from '@angular/core';

// models
import { Player } from './../../models/player.model';

@Component({
	selector: 'app-panel',
	templateUrl: './panel.component.html',
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

	// CONTROLE DO ANDAMENTO DO JOGO
	public gameInProgress: boolean = false;
	public gameIsFinished: boolean = false;

	// JOGADOR ATACANTE
	public playerHitting: Player = new Player(
		'',
		'',
		0,
		'',
		'',
		'',
	);;

	// JOGADOR VENCEDOR
	public playerWinner: string = '';


	constructor() { }

	ngOnInit() { }

	// função para escutar os eventos de keypress na tela
	handleKeyboardEvents(event: KeyboardEvent) {

		// verifica se o jogo está em andamento para poder realizar as ações
		if (this.gameInProgress) {
			if (event.key === 'd') {
				this.hitting(this.playerOne);
			} else if (event.key === 'l') {
				this.hitting(this.playerTwo);
			}
		}
	}

	// função que recebe um jogador e faz o personagem atacar 
	public hitting(player: Player): void {

		// verifica se já existe um jogador vencedor para que não seja executada
		// 	mais nenhuma ação durante o delay no final do jogo
		if (!this.playerWinner) {

			// verifica qual jogador está atacando
			if (player === this.playerOne) {

				// se for jogador um, a variavel recebe o jogador
				// e a vida do segundo jogador 'diminui' em '20%'
				this.playerHitting = this.playerOne;

				// a variavel de vida do segundo jogador inicia em 0 e termina em 100 
				// para que a barra de vida seja preenchida inversamente
				this.playerTwo.life += 20;

				// delay da animação de atacar
				setTimeout(() => {
					this.playerHitting = undefined;
				}, 300);

				// verifica se a vida do segundo jogador 'acabou'
				if (this.playerTwo.life === 100) {

					// entao primeiro jogador é o vencedor
					// finaliza batalha
					this.endGame(this.playerOne.name);
				}
			} else if (player === this.playerTwo) {
				// se for jogador dois, a variavel recebe o jogador
				// e a vida do primeiro jogador diminui em '20%'
				this.playerHitting = this.playerTwo;
				this.playerOne.life -= 20;

				// delay da animação de atacar
				setTimeout(() => {
					this.playerHitting = undefined;
				}, 300);

				// verifica se a vida do primeiro jogador 'acabou'
				if (this.playerOne.life === 0) {

					// entao o segundo jogador é o vencedor
					// finaliza batalh
					this.endGame(this.playerTwo.name);
				}
			}
		}
	}

	// função que inicia o jogo
	public startGame(e): void {
		if (e) {
			
			// chama a função para reiniciar as variaveis 
			this.restartGame(true);
			
			// informa que o jogo esta em andamento
			this.gameInProgress = true;
		}
	}

	// função que reinicia as variaveis para reinicio do jogo
	public restartGame(e): void {
		if (e) {
			this.playerWinner = '';
			this.gameIsFinished = false;
			this.playerOne.life = 100;
			this.playerTwo.life = 0;
		}
	}

	// função que chama a tela principal para que possa ser alterado os nomes dos jogadores
	public alterNames(e): void {
		if (e) {
			this.gameInProgress = false;
			this.gameIsFinished = false;
		}
	}

	// função que finaliza a btalha
	public endGame(playerName: string) {
		// verifica se existe jogador vencedor

		// esta verifica é necessaria para evitar que após um jogador acabar com a vida do outro
		// o mesmo ainda possa sofrer um golpe e a variavel ser alterada
		if (!this.playerWinner) {

			// caso ainda nao exista a variavel jogador vencedor recebe o jogador
			this.playerWinner = playerName;
		}

		// delay para exibir a tela de jogo finalizado
		setTimeout(() => {
			this.gameIsFinished = true;
		}, 500);
	}
}

