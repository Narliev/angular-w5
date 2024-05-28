import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WargameComponent } from './wargame/wargame.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { GuesssuitComponent} from './guess-suit/guess-suit.component';

@Component({
  selector: 'app-root',
  standalone: true,
  
  imports: [RouterOutlet,WargameComponent,GuesssuitComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [HttpClientModule]
})
export class AppComponent {
  wg : boolean = false;
  tg : boolean = false;
  switchC : string = "";

  startW()
  {
    this.switchC = 'wg';
  }
  startG()
  {
    this.switchC = 'gg';
  }

}
