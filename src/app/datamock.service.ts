import { Injectable } from '@angular/core';
import { TIMELINE_DATA, CARD_DATA, CATEGORIES } from './model/datas';
import { Timeline } from './model/timeline';
import { Card } from './model/card';
import { Observable, of } from 'rxjs';
import { Categorie } from './model/Categorie';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatamockService {

  availableTimelines: Timeline[];
  availableCards: Card[];
  availableCategories: Categorie[];

  constructor(private httpClient: HttpClient) {
    this.availableTimelines = TIMELINE_DATA;
    this.availableCards = CARD_DATA;
    this.availableCategories = CATEGORIES;
  }

  public getTimelines(): Observable<Timeline[]> {
    return of(this.availableTimelines);
    // return this.httpClient.get<Timeline[]>('http://localhost:8080/api/timeline');
  }

  public createTimelines(newTimeline: Timeline): Observable<Timeline[]> {
    return of(this.availableTimelines);
    // return this.httpClient.post<Timeline>('http://localhost:8080/api/timeline', newTimeline);
  }

  getTimelinesById(id: number): Observable<Timeline> {
    return of(this.availableTimelines.find(timeline => timeline.id === id));
  }

  getCards(): Observable<Card[]> {
    return of(this.availableCards);
  }

  getCategories(): Observable<Categorie[]> {
    return of(this.availableCategories);
  }

  getCategorieById(id: number): Observable<Categorie> {
    return of(this.availableCategories.find(categorie => categorie.id === id));
  }
}
