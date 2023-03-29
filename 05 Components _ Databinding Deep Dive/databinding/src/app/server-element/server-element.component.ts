import { Component, Input, OnInit, OnChanges, SimpleChange, SimpleChanges, DoCheck, AfterContentInit, OnDestroy, ElementRef, ViewEncapsulation, ViewChild } from '@angular/core';

@Component({
    selector: 'app-server-element',
    templateUrl: './server-element.component.html',
    styleUrls: ['./server-element.component.css'],
    encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, OnDestroy {
    @Input('srvElement')
    element!: { type: string, name: string, content: string, };
    @Input() name!: string;
    @ViewChild('heading') header!: ElementRef<any>;

    constructor() {
        console.log('constructor call!');
    }


    ngOnChanges(changes: SimpleChanges) {
        console.log('onChange call!');
        console.log(changes);

    }
    ngOnInit() {
        console.log('ngOnInit call!');
        // console.log(this.header.nativeElement.txtContent);


    }
    ngDoCheck() {
        console.log('ngDoCheck call');

    }
    ngAfterContentInit() {
        console.log('ngAfterContentInit call');
    }
    ngOnDestroy() {
        console.log('ngOnDestroy call');

    }

}
