import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageComponent } from './message.component';

describe('MessageComponent', () => {
  let component: MessageComponent;
  let fixture: ComponentFixture<MessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MessageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Devera criar o componente Message', () => {
    expect(component).toBeTruthy();
  });

  it('Devera conter uma variavel playerWinner do tipo string que recebera um nome dinamico', () => {
    expect(typeof (component.playerWinner)).toEqual('string');
    component.playerWinner = 'PlayerOne';
    expect(component.playerWinner).toContain('PlayerOne');
    component.playerWinner = 'PlayerTwo';
    expect(component.playerWinner).toContain('PlayerTwo');
  });


});
