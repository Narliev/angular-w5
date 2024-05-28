import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WargameComponent } from './wargame/wargame.component';
import { TwentyoneComponent } from './twentyone/twentyone.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  
  imports: [RouterOutlet,WargameComponent, TwentyoneComponent,CommonModule],
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
  startT()
  {
    this.switchC = 'tg';
  }

}
