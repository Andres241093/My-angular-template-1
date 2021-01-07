import { EntrepreneurshipType } from './entrepreneurship-type.model';

import { ENTRPRENEURSHIP } from '../constants/entrepreneurship.constant';

export class Entrepreneurship
{
	id: number;
	name: string;

	constructor(entrepreneurship: any)
	{
		this.id = entrepreneurship.id;
		this.name = entrepreneurship.name;
	}

	static getAll(): Array<Entrepreneurship>
	{
		const entrepreneurship: Array<Entrepreneurship> = [];

		ENTRPRENEURSHIP.forEach(entrepreneurshipData => {
			entrepreneurship.push(new Entrepreneurship(entrepreneurshipData));
		});

		return entrepreneurship;
	}
}