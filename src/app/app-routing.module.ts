import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListeComponent } from './liste/liste.component';
import { JeuComponent } from './jeu/jeu.component';
import { DetailComponent } from './detail/detail.component';
import { CarteComponent } from './carte/carte.component';
import { CategoriesComponent } from './categories/categories.component';
import { DetailCategorieComponent } from './detail-categorie/detail-categorie.component';

const routes: Routes = [
  { path: '', redirectTo: '/liste', pathMatch: 'full' },
  { path: 'liste', component: ListeComponent },
  { path: 'jeu/:id', component: JeuComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'new', component: DetailComponent },
  { path: 'carte/:id', component: CarteComponent },
  { path: 'newcard/:idtimeline', component: CarteComponent },
  { path: 'newcard', component: CarteComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'detailcategorie/:id', component: DetailCategorieComponent },
  { path: 'new/:idcategorie', component: DetailComponent },
  { path: 'newcategorie', component: DetailCategorieComponent },
  { path: '**', component: ListeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
