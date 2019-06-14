import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { RecipeService } from 'src/app/service/recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

    recipes: Recipe[] = [];
    selectedId: number;

    constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.recipes = this.recipeService.getRecipes();
        this.route.params.subscribe(
            (params: Params) => {
                this.selectedId = +params['id'];
            }
        );
    }

    onNewRecipeClick() {

    }
}
