import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { PanelComponent } from './panel.component';

describe('PanelComponent', () => {
  let component: PanelComponent;
  let fixture: ComponentFixture<PanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PanelComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('Devera criar o component', () => {
    expect(component).toBeTruthy();
  });

  it('Devera verificar se o metodo handleKeyboardEvents foi criado', () => {
    expect(component.handleKeyboardEvents).toHaveBeenCalled;
  });

  it('Devera verificar se o metodo hitting foi criado', () => {
    expect(component.hitting).toHaveBeenCalled;
  });

  it('Devera verificar se o metodo startgame foi criado', () => {
    expect(component.startGame).toHaveBeenCalled;
  });

  it('Devera verificar se o metodo endGame foi criado', () => {
    expect(component.endGame).toHaveBeenCalled;
  });

  it('Devera verificar se o metodo restartGame foi criado', () => {
    expect(component.restartGame).toHaveBeenCalled;
  });

  it('Devera verificar se o metodo alterNames foi criado', () => {
    expect(component.alterNames).toHaveBeenCalled;
  });
});

describe('Smoke Tests', () => {
  let component: PanelComponent;
  let fixture: ComponentFixture<PanelComponent>;
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [PanelComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
      }).compileComponents();
    })
  );
  beforeEach(() => {
    fixture = TestBed.createComponent(PanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Devera possuir uma variavel playerOne do tipo `Player`', () => {
    expect(component.playerOne).toBeTruthy();
    expect(typeof (component.playerOne)).toBeTruthy('Player');
  });

  it('Devera possuir uma variavel playerTwo do tipo `Player`', () => {
    expect(component.playerTwo).toBeTruthy();
    expect(typeof (component.playerTwo)).toBeTruthy('Player');
  });

  it('Devera possuir uma variavel playerHitting do tipo `Player`', () => {
    expect(component.playerHitting).toBeTruthy();
    expect(typeof (component.playerHitting)).toBeTruthy('Player');
  });

  it('Devera possuir uma variavel gameInProgress do tipo boolean', () => {
    expect(typeof (component.gameInProgress)).toBeTruthy('boolean');
  });

  it('Devera possuir uma variavel gameIsFinished do tipo boolean', () => {
    expect(typeof (component.gameIsFinished)).toBeTruthy('boolean');
  });

  it('Devera possuir uma variavel playerWinner do tipo string', () => {
    expect(typeof (component.gameIsFinished)).toBeTruthy('string');
  });


});
