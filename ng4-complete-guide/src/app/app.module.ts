import { LoggingService } from './logging.service';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { RecipesModule } from './recipes/recipes.module';
import { PlaceholderDirective } from './shared/placeholder/placeholder.directive';
import { AlertComponent } from './shared/alert/alert.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { RecipeService } from './recipes/recipe.service';
import { AppRoutingModule } from './app-routing.module';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { DropdownDirective } from './shared/dropdown.directive';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        // DropdownDirective,
        // AuthComponent,
        // LoadingSpinnerComponent,
        // AlertComponent,
        // PlaceholderDirective
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        // RecipesModule,
        // AuthModule,
        // ShoppingListModule,
        SharedModule,
        CoreModule
    ],
    providers: [
        // LoggingService
    ],
    bootstrap: [AppComponent],

})
export class AppModule { }
