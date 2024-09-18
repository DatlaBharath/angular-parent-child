import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule,FormControl } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ObservableTest } from '../Observable';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ItemAdderComponent } from './item-adder/item-adder.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule,HomeComponent,AboutComponent,ItemAdderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'parentandchild';

  EnterName="Jhon Doe"
  EnterAge = "22"
  EnterStatus = "Single"
  parentData1 = ""
  parentData2 = ""
  parentData3 = ""

  transferData(){
    this.parentData1 = this.EnterName;
    this.parentData2 = this.EnterAge;
    this.parentData3 = this.EnterStatus;
  }

  value="";
  sendData(value: string){
    this.value=value
  }
  
  a:ObservableTest = new ObservableTest()

  run(){
    this.a.subscribeToObservable(this.a.obd)
  }
  
  
  list:string[]=[];
  addItem(val: string){
    this.list.push(val);
  }

}
