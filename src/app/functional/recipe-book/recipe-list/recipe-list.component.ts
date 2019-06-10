import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

    recipes: Recipe[] = [
        new Recipe('Test Recipe', 'This is a test...', 'https://images.media-allrecipes.com/userphotos/560x315/1081388.jpg')
    ];

    constructor() { }

    ngOnInit() {
    }

}
