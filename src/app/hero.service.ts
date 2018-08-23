import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  
  constructor(private messageService:MessageService) { }
  
  getHero(id: number): Observable<Hero> {
      this.messageService.addMessage(`HeroService: fetched hero id=${id}`);
      return of(HEROES.find(hero => hero.id === id));
  }

  getHeroes() : Observable<Hero[]> {
    this.messageService.addMessage('Hero service: fetched Heroes');
    return of(HEROES);
  }
  
}
