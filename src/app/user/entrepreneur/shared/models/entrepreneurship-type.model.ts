import { Entrepreneurship } from './entrepreneurship.model';

import { ENTRPRENEURSHIP_TYPE } from '../constants/entrepreneurship-type.constant';

export class EntrepreneurshipType
{
	id: number;
	idEntrepreneurship: number;
	name: string;

	constructor(entrepreneurshipType: any)
	{
		this.id = entrepreneurshipType.id;
		this.idEntrepreneurship = entrepreneurshipType.idEntrepreneurship;
		this.name = entrepreneurshipType.name;
	}

	static getAll(idEntrepreneurship): Array<EntrepreneurshipType>
	{
		const entrepreneurshipType: Array<EntrepreneurshipType> = [];

		ENTRPRENEURSHIP_TYPE.forEach(entrepreneurshipTypeData => {
			if(entrepreneurshipTypeData.idEntrepreneurship === idEntrepreneurship)
			{
				entrepreneurshipType.push(new EntrepreneurshipType(entrepreneurshipTypeData));
			}
		});

		return entrepreneurshipType;
	}
}