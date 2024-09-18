import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

// https://docs.angular.lat/guide/inputs-outputs

@Component({
  selector: 'app-item-adder',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './item-adder.component.html',
  styleUrl: './item-adder.component.css'
})
export class ItemAdderComponent {
  @Output()
  public setItem = new EventEmitter<string>();

  item="";

  pushItem(){
    this.setItem.emit(this.item);
    this.item="";
  }
}
