import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { RecipeService } from 'src/app/service/recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

    recipes: Recipe[] = [];
    selectedId: number;

    constructor(private recipeService: RecipeService,
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
        this.recipes = this.recipeService.getRecipes();
    }

    onNewRecipeClick() {
        this.router.navigate(['new'], {relativeTo: this.route});
    }
}
