
import {Component, EventEmitter, Output} from "@angular/core";

@Component({
  selector: 'app-reset',
  template: `
    <ion-row>
      <ion-col>
        <button ion-button color="danger" small block (click)="onResets('all')">
           Reset All
        </button>
      </ion-col>
      <ion-col>
        <button ion-button color="danger" small block (click)="onResets('tap')">
          Reset Taps
        </button>
      </ion-col>
      <ion-col>
        <button ion-button color="danger" small block (click)="onResets('press')">
           Reset Presses
        </button>
      </ion-col>
    </ion-row>
  `
})

export class ResetComponent {

  @Output() didReset = new EventEmitter<string>();

  onResets(type: string) {
    this.didReset.emit(type);

  }
}
