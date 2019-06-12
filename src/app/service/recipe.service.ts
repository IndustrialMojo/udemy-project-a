import { OnInit, EventEmitter } from '@angular/core';
import { Recipe } from '../functional/recipe-book/models/recipe.model';

export class RecipeService implements OnInit {

    private recipes: Recipe[] = [
        new Recipe('Test Recipe 01', 'This is a test...', 'https://images.media-allrecipes.com/userphotos/560x315/1081388.jpg'),
        new Recipe('Test Recipe 02', 'This is a test...', 'https://images.media-allrecipes.com/userphotos/560x315/1081388.jpg')
    ];

    selectedRecipe = new EventEmitter<Recipe>();

    ngOnInit() {
        this.selectedRecipe.emit(this.recipes[0]);
    }

    getRecipes() {
        return this.recipes.slice();
    }

}