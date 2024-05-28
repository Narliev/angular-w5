import { Component, OnInit, inject } from '@angular/core';
import { GuesssuitService } from '../services/guesssuit.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-guess-suit',
  templateUrl: './guess-suit.component.html',
  styleUrls: ['./guess-suit.component.css'],
  imports: [CommonModule],
  providers: [HttpClientModule],
  standalone: true
})
export class GuesssuitComponent implements OnInit {
  gS = inject(GuesssuitService);
  deckId: any;
  playerCards: any[] = [];
  card : any;
  empty: boolean = false;
  score : number = 0;

  constructor() { }

  ngOnInit(): void {
    this.startGame();
  }

  startGame(): void {
    this.gS.startGame().subscribe((response) => {
      this.deckId = response.deck_id;
      this.drawCards();
    });
  }

  drawCards(): void {
    this.gS.drawCards(this.deckId).subscribe((response) => {
      this.playerCards = response.cards;
    });
  }

  guessR(): void {
    this.card = this.playerCards.shift();
    const comparison = this.gS.compareCard(this.card, "red");

    if (comparison === 1) this.score++;
    if (this.playerCards.length === 0) {
      this.empty = true;
    }
  }
  guessB(): void {
    this.card = this.playerCards.shift();
    const comparison = this.gS.compareCard(this.card, "black");

    if (comparison === 1) this.score++;
    if (this.playerCards.length === 0) {
      this.empty = true;
    }
  }
  newGame(): void{
    this.gS.startGame().subscribe((response) => {
      this.deckId = response.deck_id;
      this.drawCards();
    });
    this.score = 0;
    this.empty = false;
  }
}
