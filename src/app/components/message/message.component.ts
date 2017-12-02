// natives
import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-message',
	template: `
		<div class="msg-endGame" align="center">
			<h1>FIM DE JOGO</h1>
			<br>
			<h1>{{ playerWinner }} é o vencedor!</h1>
		</div>
	`
})
export class MessageComponent implements OnInit {
	
	// variavel que recebe o nome ddo jogador vencedor
	@Input() public playerWinner: string = '';

	constructor() {}

	ngOnInit() {}
}
