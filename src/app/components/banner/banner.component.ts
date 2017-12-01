import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-banner',
	templateUrl: './banner.component.html',
	styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
	public header: { title: string; subtitle: string } = {
		title: 'Desafio',
		subtitle: 'Batalha Ninja'
  };
  
	constructor() {}

	ngOnInit() {}
}
