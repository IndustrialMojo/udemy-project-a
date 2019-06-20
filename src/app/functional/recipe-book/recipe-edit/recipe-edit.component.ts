import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Form, Validators } from '@angular/forms';
import { RecipeService } from 'src/app/service/recipe.service';
import { Recipe } from '../models/recipe.model';

@Component({
    selector: 'app-recipe-edit',
    templateUrl: './recipe-edit.component.html',
    styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

    id: number;
    isEditMode = false;
    recipeForm: FormGroup;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private recipeService: RecipeService) { }

    ngOnInit() {
        this.route.params.subscribe(
            (params: Params) => {
                this.id = +params['id'];
                this.isEditMode = params['id'] != null;
                this.initForm();
            }
        );
    }

    onSubmit() {
        // const recipe = new Recipe(
        //     this.recipeForm.value['name'],
        //     this.recipeForm.value['description'],
        //     this.recipeForm.value['imagePath'],
        //     this.recipeForm.value['ingredients']
        // );
        if (this.isEditMode) {
            this.recipeService.updateRecipe(this.id, this.recipeForm.value);
        } else {
            this.recipeService.addRecipe(this.recipeForm.value);
        }
        this.closeEdit()
    }

    closeEdit() {
        this.router.navigate(['../'], { relativeTo: this.route });
    }


    private initForm() {
        let name = '';
        let description = '';
        let imagePath = '';
        const recipeIngredients: FormArray = new FormArray([]);

        if (this.isEditMode) {
            const recipe = this.recipeService.getRecipe(this.id);
            name = recipe.name;
            description = recipe.description;
            imagePath = recipe.imagePath;
            if (recipe['imagePath']) {
                for (const ingredient of recipe.ingredients) {
                    recipeIngredients.push(new FormGroup({
                        'name': new FormControl(ingredient.name, Validators.required),
                        'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
                    }));
                }
            }
        }

        this.recipeForm = new FormGroup({
            name: new FormControl(name, Validators.required),
            description: new FormControl(description, Validators.required),
            imagePath: new FormControl(imagePath, Validators.required),
            ingredients: recipeIngredients
        });
    }

    onAddIngredient() {
        (<FormArray>this.recipeForm.get('ingredients')).push(
            new FormGroup({
                name: new FormControl(null, Validators.required),
                amount: new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
        );
    }

    onDeleteIngedient(index: number) {
        (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
    }

    getControls() {
        return (<FormArray>this.recipeForm.get('ingredients')).controls;
    }
}
