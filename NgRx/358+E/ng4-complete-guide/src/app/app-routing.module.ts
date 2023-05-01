import { AuthGuard } from './auth/auth.guard';
import { AuthComponent } from './auth/auth.component';
import { RecipesResolverService } from './recipes/recipes-resolver.service';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    {
        path: 'recipes',
        loadChildren: () =>
            import("./recipes/recipes.module").then(m => m.RecipesModule)
    },
    {
        path: "shopping-list",
        loadChildren: () =>
            import("./shopping-list/shopping-list.module").then(
                m => m.ShoppingListModule
            )
    },
    {
        path: "auth",
        loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
