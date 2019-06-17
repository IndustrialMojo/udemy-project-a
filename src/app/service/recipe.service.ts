import { Recipe } from '../functional/recipe-book/models/recipe.model';
import { Ingredient } from '../models/ingredient.model';

export class RecipeService {

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
}