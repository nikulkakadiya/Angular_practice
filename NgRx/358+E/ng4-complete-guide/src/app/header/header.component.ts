import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AuthService } from './../auth/auth.service';
import { DataStorageService } from './../shared/data-storage.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import * as fromAuth from '../auth/store/auth.reducer';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
    private userSub!: Subscription;
    isAuthenticated = false;

    constructor(private dataStorageService: DataStorageService,
        private authService: AuthService,
        private store: Store<fromAuth.AppState>) { }

    ngOnInit() {
        this.userSub = this.store
            .select('auth')
            .pipe(map(authState => authState.user))
            .subscribe(user => {
                this.isAuthenticated = !!user;
                console.log(!user);
                console.log(!!user);
            });
    }

    onSaveData() {
        this.dataStorageService.storeRecipes();
    }


    onFetchData() {
        this.dataStorageService.fetchRecipes().subscribe();
    }
    onLogout() {
        this.authService.logout();
    }

    ngOnDestroy() {
        this.userSub.unsubscribe();
    }

}
