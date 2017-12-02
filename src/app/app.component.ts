import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	template: `
    <app-banner></app-banner>
    <div class="container">
      <app-panel></app-panel>
    </div>
  `,
	styleUrls: ['./app.component.scss']
})
export class AppComponent {}
