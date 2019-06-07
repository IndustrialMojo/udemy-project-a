import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './structural/header/header.component';
import { ShoppingListEditComponent } from './functional/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './functional/recipe-book/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './functional/recipe-book/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './functional/recipe-book/recipe-detail/recipe-detail.component';
import { RecipeComponent } from './functional/recipe-book/recipe/recipe.component';
import { RecipeBookComponent } from './functional/recipe-book/recipe-book.component';
import { IngredientComponent } from './functional/shopping-list/ingredient/ingredient.component';

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
