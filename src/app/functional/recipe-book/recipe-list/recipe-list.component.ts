import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

    @Output()
    selectedRecipe = new EventEmitter<Recipe>();

    recipes: Recipe[] = [
        new Recipe('Test Recipe 01', 'This is a test...', 'https://images.media-allrecipes.com/userphotos/560x315/1081388.jpg'),
        new Recipe('Test Recipe 02', 'This is a test...', 'https://images.media-allrecipes.com/userphotos/560x315/1081388.jpg')
    ];

    constructor() { }

    ngOnInit() {
        this.selectedRecipe.emit(this.recipes[0]);
    }

    onRecipeClicked(selectedRecipe: Recipe) {
        this.selectedRecipe.emit(selectedRecipe)
    }
}
