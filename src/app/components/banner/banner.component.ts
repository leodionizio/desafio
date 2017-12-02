// natives
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-banner',
	template: `
		<nav class="navbar navbar-dark">
			<h1>{{ header.title }} <small>{{ header.subtitle }}</small></h1>
		</nav>
	  `
})
export class BannerComponent implements OnInit {
	// variavel para o titulo e subtitulo do banner
	public header: { title: string; subtitle: string } = {
		title: 'Desafio',
		subtitle: 'Batalha Ninja'
	};

	constructor() { }

	ngOnInit() { }
}
