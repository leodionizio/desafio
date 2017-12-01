import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnControlsComponent } from './btn-controls.component';

describe('BtnControlsComponent', () => {
  let component: BtnControlsComponent;
  let fixture: ComponentFixture<BtnControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BtnControlsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // SMOKE TESTS
  it('Devera criar o componente BtnControls', () => {
    expect(component).toBeTruthy();
  });

  describe('Smoke Test Components', () => {

    it('Devera criar o botao com id restart', () => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('#restart')).toBeTruthy();
    });

    it('Devera criar o botao com id alterNames', () => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('#alterNames')).toBeTruthy();
    });
  });
});
