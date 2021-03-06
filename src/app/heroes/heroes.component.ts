import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  getHeroes(): void{
    this.heroes = this.heroService.getHeroes();
  }

  selectedHero: Hero;

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  };

  clearHero():void{
    this.selectedHero = null;
  };

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

}
