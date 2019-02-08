import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeComponent } from './liste/liste.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { JeuComponent } from './jeu/jeu.component';
import { FormsModule } from '@angular/forms';
import { DetailComponent } from './detail/detail.component';
import { CarteComponent } from './carte/carte.component';
import { CategoriesComponent } from './categories/categories.component';
import { DetailCategorieComponent } from './detail-categorie/detail-categorie.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeComponent,
    JeuComponent,
    DetailComponent,
    CarteComponent,
    CategoriesComponent,
    DetailCategorieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
