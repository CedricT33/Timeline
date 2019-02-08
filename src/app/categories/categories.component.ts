import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Categorie } from '../model/Categorie';
import { SelectionModel } from '@angular/cdk/collections';
import { DatamockService } from '../datamock.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  displayedColumns: string[] = ['select', 'id', 'nom', 'description', 'dateCreation', 'dateMiseAJour'];
  dataSource = new MatTableDataSource<Categorie>();
  selection = new SelectionModel<Categorie>(false, []);

  constructor(private router: Router, private datamockService: DatamockService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(): void {
    this.datamockService.getCategories().subscribe(Categories => this.dataSource = new MatTableDataSource<Categorie>(Categories));
  }

  onEdit(selected: Categorie[]) {
    this.router.navigate(['detailcategorie/' + selected[0].id]);
  }

  delete(selected: Categorie[]) {
    if (selected.length !== 0) {
      this.datamockService.availableCategories.splice(this.datamockService.availableCategories.indexOf(selected[0]), 1);
      this.getCategories();
      this.selection = new SelectionModel<Categorie>(false, []);
    }
  }

}
