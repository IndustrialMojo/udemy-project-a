import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../models/recipe.model'
import { RecipeService } from 'src/app/service/recipe.service';
import { ShoppingListService } from 'src/app/service/shopping-list.service';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

    recipe: Recipe;
    id: number;

    constructor(private recipeService: RecipeService,
        private shoppingListService: ShoppingListService,
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
        this.route.params.subscribe(
            (params: Params) => {
                this.id = +params['id'];
                this.recipe = this.recipeService.getRecipe(this.id);
            }
        );
    }

    onAddToShoppingList() {
        this.shoppingListService.addIngredients(this.recipe.ingredients);
    }

    onEditRecipeClick() {
        this.router.navigate(['edit'], { relativeTo: this.route });
    }

    onDeleteRecipeClick() {
        this.recipeService.deleteRecipe(this.id);
        this.router.navigate(['/recipebook']);
    }
}
