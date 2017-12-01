import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerComponent } from './banner/banner.component';
import { MessageComponent } from './message/message.component';
import { PlayerLifeComponent } from './player-life/player-life.component';
import { PanelComponent } from './panel/panel.component';
import { PlayerCharacterComponent } from './player-character/player-character.component';
import { BtnHitComponent } from './btn-hit/btn-hit.component';
import { BtnControlsComponent } from './btn-controls/btn-controls.component';
import { HomeComponent } from './home/home.component';

@NgModule({
	imports: [CommonModule, FormsModule],
	declarations: [
		BannerComponent,
		MessageComponent,
		PlayerLifeComponent,
		PanelComponent,
		PlayerCharacterComponent,
		BtnHitComponent,
		BtnControlsComponent,
		HomeComponent
	],
	exports: [
		BannerComponent,
		MessageComponent,
		PlayerLifeComponent,
		PanelComponent,
		PlayerCharacterComponent,
		BtnHitComponent,
		BtnControlsComponent,
		HomeComponent
	],
})
export class ComponentsModule {}
