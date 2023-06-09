import { Ingredient } from './../shared/ingredient.model';
import { LoggingService } from './../logging.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from './store/shopping-list.actions'
// import * as fromApp from '../store/app.reducer';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
    ingredients!: Observable<{ ingredients: Ingredient[] }>;
    private igChangeSub!: Subscription;

    constructor(
        private loggingService: LoggingService,
        private store: Store<{ shoppingList: { ingredients: Ingredient[] } }>) { }

    ngOnInit() {
        this.ingredients = this.store.select('shoppingList');
        // this.ingredients = this.slService.getIngredients();
        // this.igChangeSub = this.slService.ingredientsChanged
        //     .subscribe(
        //         (ingredients: Ingredient[]) => {
        //             this.ingredients = ingredients;
        //         }
        //     );
        this.loggingService.printLog("hello from ShoppingListComponent OnInit");
    }
    onEditItem(index: number) {
        this.store.dispatch(new ShoppingListActions.StartEdit(index))
        // this.slService.startedEditing.next(index);
    }
    ngOnDestroy(): void {
        // this.igChangeSub.unsubscribe();
    }

}
