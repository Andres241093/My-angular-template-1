import { Component, OnInit, ChangeDetectorRef, AfterViewInit } from '@angular/core';

@Component({
	selector: 'app-index',
	templateUrl: './index.component.html',
	styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

	constructor(private cdr: ChangeDetectorRef) { }

	ngOnInit() {
	}
	
	ngAfterViewInit(): void {
		this.cdr.detectChanges();
	}

}
