import { PostsService } from './posts.service';
import { Post } from './post.model';
import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription, map } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
    @ViewChild('postForm')
    postsForm: NgForm;
    loadedPosts: Post[] = [];
    isFetching = false;
    error = null;
    private errorSub: Subscription;

    constructor(private http: HttpClient, private postsService: PostsService) { }

    ngOnInit() {
        // this.onFetchPosts();
        this.errorSub = this.postsService.error.subscribe(errorMessage => {
            this.error = errorMessage;
        });

        this.isFetching = true;
        this.postsService.fetchPosts().subscribe(posts => {
            this.isFetching = false;
            this.loadedPosts = posts;
        }, error => {
            this.isFetching = false;
            this.error = error.message;
        });
    }

    onCreatePost(postData: Post) {
        // Send Http request
        this.postsService.createAndStorePost(postData);
        this.postsForm.reset();

    }

    onFetchPosts() {
        // Send Http request
        this.isFetching = true;
        this.postsService.fetchPosts().subscribe(posts => {
            this.isFetching = false;
            this.loadedPosts = posts;
        }, error => {
            this.isFetching = false;
            this.error = error.message;
            console.log(error);
        });
    }

    onClearPosts() {
        // Send Http request
        this.postsService.deletePosts()
            .subscribe(() => {
                this.loadedPosts = [];
            });
    }


    onHandleError() {
        this.error = null;
    }

    ngOnDestroy() {
        this.errorSub.unsubscribe();
    }
}
