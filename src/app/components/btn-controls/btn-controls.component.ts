import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btn-controls',
  templateUrl: './btn-controls.component.html',
  styleUrls: ['./btn-controls.component.scss']
})
export class BtnControlsComponent implements OnInit {

  @Output() public restart: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() public alter: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() { }

  public restartGame(): void {
    this.restart.emit(true);
  }

  public alterNames(): void {
    this.alter.emit(true);
  }

}
