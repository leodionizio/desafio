import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerComponent } from './banner.component';

describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Devera criar o componente banner', () => {
    expect(component).toBeTruthy();
  });

  it('Devera conter um header com title Desafio', () => {
    expect(component.header.title).toEqual('Desafio');
  });
  
  it('Devera conter um header com subtitle Batalha Ninja', () => {
    expect(component.header.subtitle).toEqual('Batalha Ninja');
  });
});
