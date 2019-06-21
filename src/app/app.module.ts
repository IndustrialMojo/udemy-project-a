import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './structural/header/header.component';
import { ShoppingListEditComponent } from './functional/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { ShoppingListComponent } from './functional/shopping-list/shopping-list.component';
import { RecipeListComponent } from './functional/recipe-book/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './functional/recipe-book/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './functional/recipe-book/recipe-detail/recipe-detail.component';
import { RecipeComponent } from './functional/recipe-book/recipe/recipe.component';
import { RecipeBookComponent } from './functional/recipe-book/recipe-book.component';
import { RecipeStartComponent } from './functional/recipe-book/recipe-start/recipe-start.component';
import { IngredientComponent } from './functional/shopping-list/ingredient/ingredient.component';
import { DropdownDirective } from './structural/dropdown_directive/dropdown.directive';
import { RecipeService } from './service/recipe.service';
import { ShoppingListService } from './service/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeEditComponent } from './functional/recipe-book/recipe-edit/recipe-edit.component';

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
    IngredientComponent,
    ShoppingListComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
      RecipeService,
      ShoppingListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
