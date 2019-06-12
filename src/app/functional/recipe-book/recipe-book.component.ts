import { Component, OnInit } from '@angular/core';
import { Recipe } from './models/recipe.model'
import { RecipeService } from 'src/app/service/recipe.service';

@Component({
    selector: 'app-recipe-book',
    templateUrl: './recipe-book.component.html',
    styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent implements OnInit {

    selectedRecipe: Recipe;

    constructor(private recipeService: RecipeService) { }

    ngOnInit() {
        this.recipeService.selectedRecipe.subscribe(
            (recipe: Recipe) => {
                this.selectedRecipe = recipe;
            }
        );
    }

    onRecipeSelect(selectedRecipe: Recipe) {
        this.selectedRecipe = selectedRecipe;
    }
}
