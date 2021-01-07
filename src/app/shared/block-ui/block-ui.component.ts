import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-block-ui',
	templateUrl: './block-ui.component.html',
	styleUrls: ['./block-ui.component.scss']
})
export class BlockUiComponent implements OnInit {

	@Input() isLoading: boolean;
	@Input() type: string;

	constructor() { }

	ngOnInit(): void {
	}

}
