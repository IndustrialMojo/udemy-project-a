import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RecipeService } from './recipe.service';
import { Recipe } from '../functional/recipe-book/models/recipe.model';
import { map, tap, take, exhaustMap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {

	constructor(private httpClient: HttpClient, private recipeService: RecipeService, private authService: AuthService) { }

	storeRecipes() {
		const recipes = this.recipeService.getRecipes();
		this.httpClient.put('https://ng-course-recipe-book-1cda9.firebaseio.com/recipes.json', recipes).subscribe(
			response => {
				console.log(response);
			}
		)
	}

	fetchRecipes() {
		return this.httpClient
			.get<Recipe[]>(
				'https://ng-course-recipe-book-1cda9.firebaseio.com/recipes.json'
			)
			.pipe(
				map(recipes => {
					return recipes.map(recipe => {
						return {
							...recipe,
							ingredients: recipe.ingredients ? recipe.ingredients : []
						};
					});
				}),
				tap(recipes => {
					this.recipeService.setRecipes(recipes);
				})
			);
	}
}