import { Component, OnInit } from '@angular/core';
import { Recipe } from './models/recipe.model'

@Component({
    selector: 'app-recipe-book',
    templateUrl: './recipe-book.component.html',
    styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent implements OnInit {

    selectedRecipe: Recipe;

    constructor() { }

    ngOnInit() {
    }

    onRecipeSelect(selectedRecipe: Recipe) {
        alert('recipe book : ' + selectedRecipe.name);
        this.selectedRecipe = selectedRecipe;
    }
}
