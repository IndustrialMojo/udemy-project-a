import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeBookComponent } from './functional/recipe-book/recipe-book.component';
import { ShoppingListComponent } from './functional/shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './functional/recipe-book/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './functional/recipe-book/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './functional/recipe-book/recipe-edit/recipe-edit.component';
import { RecipeResolverService } from './service/recipe-resolver-service';

const appRoutes: Routes = [
    { path: '', redirectTo: 'recipebook', pathMatch: 'full' },
    {
        path: 'recipebook', component: RecipeBookComponent, children: [
            { path: '', component: RecipeStartComponent },
            { path: 'new', component: RecipeEditComponent },
            { path: ':id', component: RecipeDetailComponent, resolve: [RecipeResolverService] },
            { path: ':id/edit', component: RecipeEditComponent, resolve: [RecipeResolverService] },
        ]
    },
    { path: 'shoppinglist', component: ShoppingListComponent }
]

//const appRoutes: Routes = [
//  { path: '', component: HomeComponent },
//  { path: 'users', component: UsersComponent, children: [
//    { path: ':id/:name', component: UserComponent }
//  ] },
//  { path: 'users', component: UsersComponent, children: [
//    { path: ':id/:name', component: UserComponent }
//  ] },
//   {
//     path: 'servers',
//     // canActivate: [AuthGuard],
//     canActivateChild: [AuthGuard],
//     component: ServersComponent,
//     children: [
//     { path: ':id', component: ServerComponent, resolve: {server: ServerResolver} },
//     { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] }
//   ] },
//   // { path: 'not-found', component: PageNotFoundComponent },
//   { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
//   { path: '**', redirectTo: '/not-found' }
//];

@NgModule({
    imports: [
        // RouterModule.forRoot(appRoutes, {useHash: true})
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
