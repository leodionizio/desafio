import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerComponent } from './banner.component';

describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BannerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // SMOKE TESTES
  it('Devera criar o componente Banner', () => {
    expect(component).toBeTruthy();
  });

  describe('Smoke Test Components', () => {
    it('Devera conter um objeto header', () => {
      expect(component.header).toBeTruthy();
      expect(typeof (component.header)).toEqual('object');
    });

    it('Devera conter um objeto header contendo title do tipo string', () => {
      expect(component.header.title).toBeTruthy();
      expect(typeof (component.header.subtitle)).toEqual('string');
    });

    it('Devera conter um objeto header contendo subtitle do tipo string', () => {
      expect(component.header.subtitle).toBeTruthy();
      expect(typeof (component.header.subtitle)).toEqual('string');
    });
  })
});
