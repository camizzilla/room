import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-door',
  templateUrl: './door.component.html',
  styleUrls: ['./door.component.scss']
})
export class DoorComponent implements OnChanges {

  @Input() openDoor: boolean | undefined;
  isDoorOpen = false;
  

  ngOnChanges(changes: SimpleChanges): void {
    this.isDoorOpen = !this.isDoorOpen;
  }

}
