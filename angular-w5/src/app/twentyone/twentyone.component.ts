import { Component, OnInit, inject } from '@angular/core';
import { TwentyoneService } from '../services/twentyone.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-twentyone',
  templateUrl: './twentyone.component.html',
  styleUrls: ['./twentyone.component.css'],
  imports: [CommonModule],
  providers: [HttpClientModule],
  standalone: true
})
export class TwentyoneComponent {
  toS = inject(TwentyoneService);
  deckId: any;
  playerCards: any[] = [];
  card : any;
  score : number = 0;
  winner : boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.startGame();
  }

  startGame(): void {
    this.toS.startGame().subscribe((response) => {
      this.deckId = response.deck_id;
    });
    this.card = this.toS.drawCard(this.deckId);
    this.playerCards.push(this.card);
    this.score += this.card.value;
  }

  drawCard(): void {
    this.card = this.toS.drawCard(this.deckId);
    this.playerCards.push(this.card);
    this.score += this.card.value;
  }
  newGame(): void{
    this.playerCards = [];
    this.toS.startGame().subscribe((response) => {
      this.deckId = response.deck_id;
      this.drawCard();
    });
  }
}
