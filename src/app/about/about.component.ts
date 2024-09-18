import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  @Output()
  public sendData2 = new EventEmitter<string>();

  a!:string;
  
  change(){
    this.sendData2.emit(this.a)
  }
}
