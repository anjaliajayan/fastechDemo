import { ActionReducerMap } from "@ngrx/store";
import { personalDetailsReducer } from "./personalDetails.reducer";

export interface AppState {
    personalDetailsData: any;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    personalDetailsData: personalDetailsReducer
};

export const getpersonalDetailsObjState = (state: AppState) =>
    state.personalDetailsData.personalObj;