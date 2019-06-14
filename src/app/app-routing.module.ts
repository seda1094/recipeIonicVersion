import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {RecipeDetailsComponent} from './recipe-details/recipe-details.component';
import {RecipeListComponent} from './recipe-list/recipe-list.component'

const routes: Routes = [
  { path: 'details/:id/:query', component: RecipeDetailsComponent },
  { path: 'list/:query', component: RecipeListComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  RecipeDetailsComponent,
  RecipeListComponent
]