import { User } from "src/app/models/user.model";
import { UserAction, UserActionTypes } from '../actions/user.actions';

const initialState: Array<User> = [{
    name: 'John'
}];

export function UserReducer(state: Array<User> = initialState,
    action: UserAction) {
        switch(action.type) {
            case UserActionTypes.ADD_USER:
                return [...state, action.payload]; 
            default:
                return state;
        }

}