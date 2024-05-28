import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuesssuitService {
  private apiUrl = 'https://deckofcardsapi.com/api/deck';

  cs:string = "";

  constructor(private http: HttpClient) { }

  startGame(): Observable<any> {
    return this.http.get(`${this.apiUrl}/new/shuffle/?deck_count=1`);
  }
  drawCards(deckId: string): Observable<any>{
    return this.http.get(`${this.apiUrl}/${deckId}/draw/?count=52`);
  }

  compareCard(card: any, color:string): number {
    this.cs = card.suit;
    if((this.cs == "HEARTS" || this.cs == "DIAMONDS") && color == "red") return 1;
    else if((this.cs == "SPADES" || this.cs == "CLUBS") && color == "black") return 1;
    else return -1;
  }
}