import {MainAction, MainActionType, MainState} from "../types/main-reducer";
import {Reducer} from "redux";
import replaceById from "../helpers/replace-by-id";


const initialState: MainState = {
    name: 'test',
    token: 'tokentokentoken',
    contactList: [
        {id: 2, name: 'test', tel: '8800test'},
        {id: 1, name: 'test', tel: '8800test'}
    ]
};


const mainReducer: Reducer<MainState, MainAction> = (state: MainState = initialState, action: MainAction) => {
    switch (action.type) {
        case MainActionType.ADD_CONTACT:
            return {...state, contactList: [action.payload, ...state.contactList]}
        case MainActionType.REMOVE_CONTACT:
            return {...state, contactList: state.contactList.filter(contact => contact.id !== action.payload)}
        case MainActionType.UPDATE_CONTACT:
            return {...state, contactList: replaceById(state.contactList, action.payload)}
        default:
            return state
    }
};

export default mainReducer

