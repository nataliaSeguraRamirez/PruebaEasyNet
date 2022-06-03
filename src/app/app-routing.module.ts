import { ShowArticlesComponent } from './components/show-articles/show-articles.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './components/articles/articles.component';
import { CreateArticlesComponent } from './components/create-articles/create-articles.component';
import { UpdateArticlesComponent } from './components/update-articles/update-articles.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path: 'create', component: CreateArticlesComponent},
  {path: 'show', component: ShowArticlesComponent},
  {path:'update', component: UpdateArticlesComponent},
  {path: 'home', component: ArticlesComponent},
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
