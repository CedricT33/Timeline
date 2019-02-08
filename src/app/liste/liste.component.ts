import { Component, OnInit } from '@angular/core';
import { Timeline } from '../model/timeline';
import {SelectionModel, DataSource} from '@angular/cdk/collections';
import { Router } from '@angular/router';
import { DatamockService } from '../datamock.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  displayedColumns: string[] = ['select', 'id', 'nom', 'categorie', 'dateCreation', 'dateMiseAJour', 'nombreCartes'];
  dataSource = new MatTableDataSource<Timeline>();
  selection = new SelectionModel<Timeline>(false, []);

  constructor(private router: Router, private datamockService: DatamockService) {}

  ngOnInit() {
    this.getTimelines();
  }

  getTimelines(): void {
    this.datamockService.getTimelines().subscribe(timelines => this.dataSource = new MatTableDataSource<Timeline>(timelines));
    // this.datamockService.getTimelines().subscribe(timelineListAPI => this.timelineList = timelineListAPI);
  }

  compterCartes(nomTimeline: string): number {
    const cartes = this.datamockService.availableCards.filter(card => card.timeline === nomTimeline);
    return cartes.length;
  }

  onEdit(selected: Timeline[]) {
    this.router.navigate(['detail/' + selected[0].id]);
  }

  jouer(selected: Timeline[]) {
    this.router.navigate(['jeu/' + selected[0].id]);
  }

  delete(selected: Timeline[]) {
    if (selected.length !== 0) {
      this.datamockService.availableTimelines.splice(this.datamockService.availableTimelines.indexOf(selected[0]), 1);
      this.getTimelines();
      this.selection = new SelectionModel<Timeline>(false, []);
    }
  }

}
