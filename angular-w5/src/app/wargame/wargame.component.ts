import { Component, OnInit, inject } from '@angular/core';
import { WarService } from '../services/war.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-wargame',
  templateUrl: './wargame.component.html',
  styleUrls: ['./wargame.component.css'],
  imports: [CommonModule],
  providers: [HttpClientModule],
  standalone: true
})
export class WargameComponent implements OnInit {
  warS = inject(WarService);
  deckId: any;
  player1Cards: any[] = [];
  player2Cards: any[] = [];
  winner: any;
  card1 : any;
  card2 : any;

  constructor() { }

  ngOnInit(): void {
    this.startGame();
  }

  startGame(): void {
    this.warS.startGame().subscribe((response) => {
      this.deckId = response.deck_id;
      this.drawCards();
    });
  }

  drawCards(): void {
    this.warS.drawCards(this.deckId).subscribe((response) => {
      this.player1Cards = response.cards.slice(0, 26);
      this.player2Cards = response.cards.slice(26);
    });
  }

  playRound(): void {
    this.card1 = this.player1Cards.shift();
    this.card2 = this.player2Cards.shift();
    const comparison = this.warS.compareCards(this.card1, this.card2);

    if (comparison === 1) {
      this.player1Cards.push(this.card1, this.card2);
    } else if (comparison === -1) {
      this.player2Cards.push(this.card1, this.card2);
    }
    else if (comparison === 0){
      this.player1Cards.push(this.card2);
      this.player2Cards.push(this.card1);
    }
    if (this.player1Cards.length === 0) {
      this.winner = 'Player 2';
    } else if (this.player2Cards.length === 0) {
      this.winner = 'Player 1';
    }
  }
  newGame(): void{
    this.warS.startGame().subscribe((response) => {
      this.deckId = response.deck_id;
      this.drawCards();
    });
  }
}