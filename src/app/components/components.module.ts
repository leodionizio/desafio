// natives
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { BannerComponent } from './banner/banner.component';
import { BtnControlsComponent } from './btn-controls/btn-controls.component';
import { BtnHitComponent } from './btn-hit/btn-hit.component';
import { HomeComponent } from './home/home.component';
import { MessageComponent } from './message/message.component';
import { PanelComponent } from './panel/panel.component';
import { PlayerCharacterComponent } from './player-character/player-character.component';
import { PlayerLifeComponent } from './player-life/player-life.component';

@NgModule({
	imports: [CommonModule, FormsModule],
	declarations: [
		BannerComponent,
		BtnControlsComponent,
		BtnHitComponent,
		HomeComponent,
		MessageComponent,
		PanelComponent,
		PlayerCharacterComponent,
		PlayerLifeComponent
	],
	exports: [
		BannerComponent,
		BtnControlsComponent,
		BtnHitComponent,
		HomeComponent,
		MessageComponent,
		PanelComponent,
		PlayerCharacterComponent,
		PlayerLifeComponent
	],
})
export class ComponentsModule {}
