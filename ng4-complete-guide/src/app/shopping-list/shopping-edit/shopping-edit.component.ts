import { ShoppingListService } from './../shopping-list.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
    @ViewChild('nameInput', { static: false })
  nameInputRef!: ElementRef;
    @ViewChild('amountInput', { static: false })
  amountInputRef!: ElementRef;


    constructor(private slService: ShoppingListService) { }

    onAddItem() {
        const ingName = this.nameInputRef.nativeElement.value;
        const ingAmount = this.amountInputRef.nativeElement.value;
        const newIngredient = new Ingredient(ingName, ingAmount);
        // this.ingredientAdded.emit(newIngredient);
        this.slService.addIngredient(newIngredient);
    }



}
