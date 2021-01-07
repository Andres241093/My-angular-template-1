import { MUNICIPALITIES } from '../constants/municipality.constant';

export class Municipality
{
	id: number;
	idState: number;
	name: string;
	capital: string;
	parish: Array<string>

	constructor(municipality: any)
	{
		this.id = municipality.id;
		this.idState = municipality.idState;
		this.name = municipality.name;
		this.capital = municipality.capital;
		this.parish = municipality.parish;	
	}

	static getAll(idState): Array<Municipality>
	{
		const municipalities: Array<Municipality> = [];
		MUNICIPALITIES.forEach(municipalityData => {
			if(municipalityData.idState === idState)
			{
				municipalities.push(new Municipality(municipalityData));
			}
		});
		return municipalities;
	}
}