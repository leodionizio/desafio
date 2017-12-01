import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageComponent } from './message.component';

describe('MessageComponent', () => {
  let component: MessageComponent;
  let fixture: ComponentFixture<MessageComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageComponent);
    component = fixture.componentInstance;
    component.jogadorVencedor = 'Jogador Teste';    
    fixture.detectChanges();
  });

  it('Devera criar o componente Message', () => {
    expect(component).toBeTruthy();
  });

  it('Devera conter um título com a tag h1 contendo o texto FIM DE JOGO',() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('FIM DE JOGO');
  })

  it('Devera conter um jogador vencedor dinamico', () => {
    expect(component.jogadorVencedor).toEqual('Jogador Teste');
  });


});
