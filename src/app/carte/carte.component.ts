import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from '../model/card';
import { DatamockService } from '../datamock.service';
import { Timeline } from '../model/timeline';
import { Location } from '@angular/common';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {

  id: number;
  titre = 'Edition';
  carte: Card;
  timelines: Timeline[] = [];
  timelineId: number;
  isDisabled = false;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private datamockService: DatamockService,
              private location: Location) {}

  ngOnInit() {
    this.timelines = this.datamockService.availableTimelines;
    this.id = +this.route.snapshot.params.id;
    this.timelineId = +this.route.snapshot.params.idtimeline;
    if (this.id) {
      this.carte = this.datamockService.availableCards.find(card => card.id === this.id);
    } else if (this.timelineId) {
      this.carte = new Card(this.datamockService.availableCards.length + 1, '', 0, '', 'assets/images/toile.jpg',
                            this.datamockService.availableTimelines.find(timeline => timeline.id === this.timelineId).nom);
      this.isDisabled = true;
      this.titre = 'Ajout';
    } else {
      this.carte = new Card(this.datamockService.availableCards.length + 1, '', 0, '', 'assets/images/toile.jpg', '');
      this.titre = 'Ajout';
    }
  }

  onSave() {
    if (this.id) {
      this.location.back();
    } else {
      this.datamockService.availableCards.push(this.carte);
      this.location.back();
    }
  }

}
