import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from 'src/app/models/ingredient.model';
import { ShoppingListService } from 'src/app/service/shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-shopping-list-edit',
    templateUrl: './shopping-list-edit.component.html',
    styleUrls: ['./shopping-list-edit.component.css']
})

export class ShoppingListEditComponent implements OnInit, OnDestroy {

    @ViewChild('f', { static: false }) shoppingListForm: NgForm;

    subscription: Subscription;
    editMode = false;
    editIndex: number;
    editIngredient: Ingredient;

    constructor(private shoppingListService: ShoppingListService) { }

    ngOnInit() {
        this.subscription = this.shoppingListService.currentEdit.subscribe(
            (index: number) => {
                this.editIndex = index;
                this.editMode = true;
                this.editIngredient = this.shoppingListService.getIngredient(index);
                this.shoppingListForm.setValue(
                    {
                        name: this.editIngredient.name,
                        amount: this.editIngredient.amount
                    }
                );
            }
        );
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    onAddItem(form: NgForm) {
        const value = form.value;
        const newIngredient = new Ingredient(value.name, value.amount)
        if (this.editMode) {
            this.shoppingListService.updateIngredient(this.editIndex, newIngredient);
        } else {
            this.shoppingListService.addIngredient(newIngredient);
        }
        form.reset();
        this.editMode = false;
    }

    onDelete() {
        this.shoppingListService.removeIngredient(this.editIndex);
        this.onResetForm();
    }

    onResetForm() {
        this.shoppingListForm.reset();
        this.editMode = false;
    }
}
