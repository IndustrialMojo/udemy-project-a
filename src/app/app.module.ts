import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './structural/header/header.component';
import { ShoppingListEditComponent } from './functional/shoppingList/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './functional/recipeBook/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './functional/recipeBook/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './functional/recipeBook/recipe-detail/recipe-detail.component';
import { RecipeComponent } from './functional/recipeBook/recipe/recipe.component';
import { RecipeBookComponent } from './functional/recipeBook/recipeBook.component';
import { IngredientComponent } from './functional/shoppingList/ingredient/ingredient.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeComponent,
    RecipeBookComponent,
    IngredientComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
