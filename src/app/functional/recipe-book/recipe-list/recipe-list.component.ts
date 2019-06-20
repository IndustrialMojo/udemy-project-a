import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { RecipeService } from 'src/app/service/recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

    recipes: Recipe[] = [];
    selectedId: number;
    subscription: Subscription;

    constructor(
        private recipeService: RecipeService,
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
        this.recipes = this.recipeService.getRecipes();
        this.subscription = this.recipeService.recipesChange.subscribe(
            (recipes: Recipe[]) => {
                this.recipes = recipes;
            }
        );
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    onNewRecipeClick() {
        this.router.navigate(['new'], { relativeTo: this.route });
    }
}
