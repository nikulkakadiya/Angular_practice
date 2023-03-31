import { RecipeService } from './../recipe.service';
import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
    @Output() recipeWasSelected = new EventEmitter<Recipe>();
    recipes: Recipe[] = [];

    constructor(private recipeService: RecipeService) { }

    ngOnInit() {
        this.recipes = this.recipeService.getRecipes();
    }

}
