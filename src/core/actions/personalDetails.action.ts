import { Action } from '@ngrx/store';
export enum PersonalDetailsTypes {
	SET_PERSONAL_DETAILS_OBJ = '[PERSONAL_DETAILS] OBJ',
}
export class PersonalDetailsAction implements Action {
	type: string;
	payload: {
		personalObj: any;
	};
}

export class LoadPersonalDetailObj implements Action {

	readonly type = PersonalDetailsTypes.SET_PERSONAL_DETAILS_OBJ;
	constructor(readonly payload: { personalObj: any }) {}
}
