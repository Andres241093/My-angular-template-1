import { STATES } from '../constants/state.constant';

export class State
{
	id: number;
	name: string;
	capital: string;

	constructor(state: any)
	{
		this.id = state.id;
		this.name = state.name;
		this.capital = state.capital;
	}

	static getAll(): Array<State>
	{
		const states: Array<State> = [];
		STATES.forEach(stateData => {
			states.push(new State(stateData));
		});
		return states;
	}
}