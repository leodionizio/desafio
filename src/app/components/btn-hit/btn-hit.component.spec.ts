import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Player } from './../../models/player.model';

import { BtnHitComponent } from './btn-hit.component';

describe('BtnHitComponent', () => {
  let component: BtnHitComponent;
  let fixture: ComponentFixture<BtnHitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BtnHitComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnHitComponent);
    fixture.componentInstance.player = new Player(
      'playerTwo',
      '',
      0,
      'life-bar-player-two',
      'assets/player/player2.png',
      'assets/player/player2-behit.png',
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // smoke tests
  it('Devera criar o componente BtnHitComponent', async () => {
    fixture.whenStable().then(() => {

      expect(component).toBeTruthy();
    })
  });

  it('Devera criar o botao com com a classe btn-hit', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.btn-hit')).toBeTruthy();
  });
});
