import { PARISHES } from '../constants/parish.constant';

export class Parish
{
	id: number;
	municipality_id: number;
	name: string;

	constructor(parish: any)
	{
		this.id = parish.id;
		this.municipality_id = parish.municipality_id;
		this.name = parish.name;
	}

	static getAll(municipality_id): Array<Parish>
	{
		const parishes: Array<Parish> = [];
		PARISHES.forEach(parishData => {
			if(Number(parishData.municipality_id) === municipality_id)
			{
				parishes.push(new Parish(parishData));
			}
		});
		return parishes;
	}
}