import { Recipe } from '../functional/recipe-book/models/recipe.model';
import { Ingredient } from '../models/ingredient.model';
import { Subject } from 'rxjs';

export class RecipeService {

    recipesChange = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe(
            'Test Recipe 01',
            'This is a test...',
            'https://images.media-allrecipes.com/userphotos/560x315/1081388.jpg',
            [new Ingredient('Burger', 1)]),

        new Recipe('Test Recipe 02',
            'This is a test...',
            'https://images.media-allrecipes.com/userphotos/560x315/1081388.jpg',
            [new Ingredient('Broccoli', 1)])
    ];

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChange.next(this.recipes.slice());
    }

    updateRecipe(index: number, recipe: Recipe) {
        this.recipes[index] = recipe;
        this.recipesChange.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChange.next(this.recipes.slice());
    }

}