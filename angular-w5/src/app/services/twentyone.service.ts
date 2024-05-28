import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TwentyoneService {
  private apiUrl = 'https://deckofcardsapi.com/api/deck';

  c1 : number = 0;

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
    'JACK': 10,
    'QUEEN': 10,
    'KING': 10,
    'ACE': 1
  };

  constructor(private http: HttpClient) { }

  startGame(): Observable<any> {
    return this.http.get(`${this.apiUrl}/new/shuffle/?deck_count=1`);
  }
  drawCard(deckId: string): Observable<any>{
    return this.http.get(`${this.apiUrl}/${deckId}/draw/?count=1`);
  }
}