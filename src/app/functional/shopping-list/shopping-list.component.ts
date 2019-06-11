import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../models/ingredient.model';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {


    ingredients: Ingredient[] = [
        new Ingredient('Meat', 1),
        new Ingredient('Cheese', 1)
    ];

    constructor() { }

    ngOnInit() {
    }

}
