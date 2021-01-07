import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { State } from 'src/app/shared/models/state.model';
import { Municipality } from 'src/app/shared/models/municipality.model';
import { Parish } from 'src/app/shared/models/parish.model';
import { EntrepreneurService } from '../../entrepreneur/shared/services/entrepreneur.service';
import { Entrepreneur } from 'src/app/shared/models/entrepreneur.model';
import { AlertService } from 'src/app/services/alert.service';
import { Router } from '@angular/router';
import { BlockUiFlagService } from 'src/app/services/block-ui-flag.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

	isLinear: boolean = true;
	hide: boolean = true;
	// typeEntrepreneurFlag: boolean = false;
	
	personalForm: FormGroup = new FormGroup({
		name: new FormControl('',[Validators.required]),
		surname: new FormControl('',[Validators.required]),
		dni: new FormControl('',[Validators.required,Validators.pattern('V|E[0-9]+'), Validators.minLength(6)]),
		gender: new FormControl('',[Validators.required]),
	});
	locationForm: FormGroup = new FormGroup({
		state: new FormControl('',[Validators.required]),
		municipality: new FormControl('',[Validators.required]),
		parish_id: new FormControl('',[Validators.required]),
		address: new FormControl('',[Validators.required])
	});
	contactForm: FormGroup = new FormGroup({
		phone: new FormControl('',[Validators.required, Validators.pattern('\[0-9]{4}\[0-9]{3}[0-9]{2}[0-9]{2}')]),
		email: new FormControl('',[Validators.required, Validators.email])
	});
	// typeForm: FormGroup = new FormGroup({
	// 	entrepreneurship: new FormControl('',[Validators.required]),
	// 	typeEntrepreneur: new FormControl('')
	// });
	securityForm: FormGroup = new FormGroup({
		password: new FormControl('',[Validators.required, Validators.minLength(6)])
	});

	// allEntrepreneurship: Array<Entrepreneurship> = Entrepreneurship.getAll();
	// entrepreneurshipType: Array<EntrepreneurshipType> = [];

	states: Array<State> = State.getAll();
	municipalities: Array<Municipality> = [];
	parishes: Array<Parish> = [];


	constructor(
		private entrepreneurService: EntrepreneurService,
		private alertService: AlertService,
		private route: Router,
		private blockUiFlagService: BlockUiFlagService) {}

	fetchFormData()
	{
		let entrepreneur = new Entrepreneur();
		entrepreneur.name = this.personalForm.value.name;
		entrepreneur.surname = this.personalForm.value.surname;
		entrepreneur.dni = this.personalForm.value.dni;
		entrepreneur.gender = this.personalForm.value.gender;
		entrepreneur.state = this.locationForm.value.state.name;
		entrepreneur.municipality = this.locationForm.value.municipality.name;
		entrepreneur.parish_id = this.locationForm.value.parish_id;
		entrepreneur.address = this.locationForm.value.address;
		entrepreneur.phone = this.contactForm.value.phone;
		entrepreneur.email = this.contactForm.value.email;
		// entrepreneur.entrepreneurship = this.typeForm.value.entrepreneurship.name;
		// if(this.entrepreneurshipType.length != 0)
		// {
		// 	entrepreneur.typeEntrepreneur = this.typeForm.value.typeEntrepreneur.name;
		// }
		
		entrepreneur.password = this.securityForm.value.password;

		return entrepreneur;
	}

	save()
	{
		this.blockUiFlagService.start();
		const entrepreneurData = this.fetchFormData();
		this.entrepreneurService.save(entrepreneurData).subscribe(res => {
			this.alertService.show('Usuario creado exitosamente','Cerrar',3000);
			this.route.navigate(['/']);
		});
	}


	ngOnInit() {
		// this.typeForm['controls'].entrepreneurship.valueChanges.subscribe( res => {
		// 	const idEntrepreneurship = res.id;
		// 	this.entrepreneurshipType = EntrepreneurshipType.getAll(idEntrepreneurship);
		// 	this.entrepreneurshipType.length == 0 ? this.typeEntrepreneurFlag = true : this.typeEntrepreneurFlag = false;
		// });

		this.locationForm['controls'].state.valueChanges.subscribe(res => {
			const idState = res.id;
			this.municipalities = Municipality.getAll(idState);
		});

		this.locationForm['controls'].municipality.valueChanges.subscribe(res => {
			const municipalityId = res.id;
			this.parishes = Parish.getAll(municipalityId);
		});
	}
}
