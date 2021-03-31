

import * as _ from "lodash";
import { PersonalDetailsAction, PersonalDetailsTypes } from "../actions/personalDetails.action";

export interface personalDetailsState {
	personalObj: any | null;
}

const initialpersonalDetailsState: personalDetailsState = {
	personalObj: {}
};

export function personalDetailsReducer(
	state: personalDetailsState = initialpersonalDetailsState,
	action: PersonalDetailsAction
): any {

	switch (action.type) {
		case PersonalDetailsTypes.SET_PERSONAL_DETAILS_OBJ:

			return {
				personalObj: action.payload.personalObj
			};

		default:
			return state;
	}
}



