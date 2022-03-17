import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.scss']
})
export class LightComponent implements OnChanges {

  @Input() openDoor: boolean | undefined;
  isLightOn = false;

  ngOnChanges(changes: SimpleChanges): void {
    this.isLightOn = !this.isLightOn;
  }

}
