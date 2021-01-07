export class Entrepreneur
{
	name: string;
	surname: string;
	dni: string;
	gender: string;
	state: string;
	municipality: string;
	parish_id: number;
	address: string;
	phone: number;
	email: string;
	entrepreneurship: string;
	typeEntrepreneur?: string;
	password: string;
	userType: string = 'entrepreneur';
}