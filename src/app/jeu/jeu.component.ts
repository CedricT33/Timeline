import { Component, OnInit } from '@angular/core';
import { Card } from '../model/card';
import { ActivatedRoute } from '@angular/router';
import { Timeline } from '../model/timeline';
import { DatamockService } from '../datamock.service';

@Component({
  selector: 'app-jeu',
  templateUrl: './jeu.component.html',
  styleUrls: ['./jeu.component.css']
})
export class JeuComponent implements OnInit {

  id: number;
  timeline: Timeline;
  cardToFind: Card;
  cardToFindList: Card[] = [];
  cardFoundList: Card[] = [];
  classWrong = false;
  btnDeviner = 'DEVINER';
  affichageTrouve = false;
  disabled = false;
  guessDate: string;

  push() {
    this.cardFoundList.push(this.cardToFind);
    this.cardFoundList.sort((a, b) => {
      return a.annee - b.annee;
    });
  }

  onGuess() {
    if (this.cardToFindList.length !== 0 && Number(this.guessDate) === +this.cardToFind.annee) {
      this.classWrong = false;
      this.btnDeviner = 'DEVINER';
      this.guessDate = '';
      this.push();
      this.affichageTrouve = true;
      this.cardToFind = this.cardToFindList.pop();
    } else if (this.cardToFindList.length === 0 && Number(this.guessDate) === +this.cardToFind.annee) {
      this.disabled = true;
      this.classWrong = false;
      this.btnDeviner = 'DEVINER';
      this.guessDate = '';
      this.push();
      this.affichageTrouve = true;
      this.cardToFind = {id: 0, titre: 'Fin du paquet', annee: 0, imageUrl: 'assets/images/croix.png', description: '', timeline: ''};
    } else if (this.cardToFindList.length === 0 && Number(this.guessDate) !== this.cardToFind.annee) {
      this.classWrong = true;
      this.btnDeviner = 'RE-ESSAYER';
    } else if (this.cardToFindList.length !== 0 && Number(this.guessDate) !== this.cardToFind.annee) {
      this.classWrong = true;
      this.btnDeviner = 'RE-ESSAYER';
      } else {
      this.disabled = true;
      this.push();
      this.cardToFind = {id: 0, titre: 'Fin du paquet', annee: 0, imageUrl: 'assets/images/croix.png', description: '', timeline: ''};
      this.guessDate = '';
    }
  }

  onGuessKey() {
    if (this.disabled === true) {
    } else {
      this.onGuess();
    }
  }

  onStart() {
    this.cardToFindList = this.datamockService.availableCards.filter(card => card.timeline === this.timeline.nom);
    // .filter reviens à faire une boucle avec un if pour retourner tous les éléments trouvés
  }

  constructor(private route: ActivatedRoute, private datamockService: DatamockService) {}

  ngOnInit() {
    this.id = +this.route.snapshot.params.id; // mettre un + reviens à  Number(this.route.snapshot.params.id)
    this.timeline = this.datamockService.availableTimelines.find(timeline => timeline.id === this.id);
    // .find reviens à faire une boucle avec un if pour retourner le premier élément trouvé
    this.onStart();
    this.cardToFind = this.cardToFindList.pop();
  }

}
