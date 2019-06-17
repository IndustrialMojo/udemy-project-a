import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from './models/recipe.model'

@Component({
    selector: 'app-recipe-book',
    templateUrl: './recipe-book.component.html',
    styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent {

    selectedRecipe: Recipe;

    constructor() { }

    onRecipeSelect(selectedRecipe: Recipe) {
        this.selectedRecipe = selectedRecipe;
    }
}
