import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WarService {
  private apiUrl = 'https://deckofcardsapi.com/api/deck';

  c1 : number = 0;
  c2 : number = 0;

  private cardValues: { [key: string]: number } = {
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '10': 10,
    'JACK': 11,
    'QUEEN': 12,
    'KING': 13,
    'ACE': 14
  };

  constructor(private http: HttpClient) { }

  startGame(): Observable<any> {
    return this.http.get(`${this.apiUrl}/new/shuffle/?deck_count=1`);
  }
  drawCards(deckId: string, count: number): Observable<any>{
    return this.http.get(`${this.apiUrl}/${deckId}/draw/?count=${count}`);
  }

  compareCards(card1: any, card2: any): number {
    this.c1 = this.cardValues[card1.value];
    this.c2 = this.cardValues[card2.value];
    if(this.c1>this.c2) return 1;
    else if(this.c1<this.c2) return -1;
    else return 0;
  }
}