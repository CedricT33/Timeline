import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Timeline } from '../model/timeline';
import { SelectionModel } from '@angular/cdk/collections';
import { Card } from '../model/card';
import { DatamockService } from '../datamock.service';
import { Location } from '@angular/common';
import { Categorie } from '../model/Categorie';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  id: number;
  categorieId: number;
  titre = 'Edition';
  timeline: Timeline;
  categories: Categorie[] = [];
  isDisabled = false;
  categorie: Categorie;

  displayedColumns: string[] = ['select', 'id', 'titre', 'annee', 'imageUrl', 'description'];
  dataSource: Card[] = [];
  selection = new SelectionModel<Card>(false, []);

  constructor(private router: Router,
              private route: ActivatedRoute,
              private datamockService: DatamockService,
              private location: Location) {}

  ngOnInit() {
    this.getCategories();
    this.id = Number(this.route.snapshot.params.id);
    this.categorieId = +this.route.snapshot.params.idcategorie;
    if (this.id) {
      this.getTimelineById(this.id);
      this.dataSource = this.datamockService.availableCards.filter(card => card.timeline === this.timeline.nom);
    } else if (this.categorieId) {
      this.getCategorieById(this.categorieId);
      this.timeline = new Timeline(this.datamockService.availableTimelines.length + 1, '',
                                   this.categorie.nom, new Date(), new Date(), 0);
      this.isDisabled = true;
      this.titre = 'Ajout';
    } else {
      this.timeline = new Timeline(this.datamockService.availableTimelines.length + 1, '', '', new Date(), new Date(), 0);
      this.titre = 'Ajout';
    }
  }

  getCategories(): void {
    this.datamockService.getCategories().subscribe(categories => this.categories = categories);
  }

  getTimelineById(id: number): void {
    this.datamockService.getTimelinesById(id).subscribe(timeline => this.timeline = timeline);
  }

  getCategorieById(id: number): void {
    this.datamockService.getCategorieById(id).subscribe(categorie => this.categorie = categorie);
  }

  onSave() {
    if (this.id) {
      this.location.back();
    } else {
      this.datamockService.availableTimelines.push(this.timeline);
      this.location.back();
    }
  }

  onEdit(selected: Timeline[]) {
    this.router.navigate(['carte/' + selected[0].id]);
  }

}
