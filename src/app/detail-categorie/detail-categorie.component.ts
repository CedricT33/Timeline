import { Component, OnInit } from '@angular/core';
import { Categorie } from '../model/Categorie';
import { Timeline } from '../model/timeline';
import { SelectionModel } from '@angular/cdk/collections';
import { Router, ActivatedRoute } from '@angular/router';
import { DatamockService } from '../datamock.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail-categorie',
  templateUrl: './detail-categorie.component.html',
  styleUrls: ['./detail-categorie.component.css']
})
export class DetailCategorieComponent implements OnInit {

  id: number;
  titre = 'Edition';
  categorie: Categorie;

  displayedColumns: string[] = ['select', 'id', 'nom', 'dateCreation', 'dateMiseAJour'];
  dataSource: Timeline[] = [];
  selection = new SelectionModel<Timeline>(false, []);

  constructor(private router: Router,
              private route: ActivatedRoute,
              private datamockService: DatamockService,
              private location: Location) {}

  ngOnInit() {
    this.id = +this.route.snapshot.params.id;
    if (this.id) {
      this.categorie = this.datamockService.availableCategories.find(categorie => categorie.id === this.id);
      this.dataSource = this.datamockService.availableTimelines.filter(timeline => timeline.categorie === this.categorie.nom);
    } else {
      this.categorie = new Categorie(this.datamockService.availableCategories.length + 1, '', '', new Date(), new Date());
      this.titre = 'Ajout';
    }
  }

  onSave() {
    if (this.id) {
      this.location.back();
    } else {
      this.datamockService.availableCategories.push(this.categorie);
      this.location.back();
    }
  }

  onEdit(selected: Timeline[]) {
    this.router.navigate(['detail/' + selected[0].id]);
  }

}
