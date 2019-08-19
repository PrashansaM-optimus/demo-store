import { User } from '../../models/user.model';
import { Action } from '@ngrx/store';

export enum UserActionTypes {
    ADD_USER = '[USER] Add User'
}

export class AddItemAction implements Action {
    readonly type = UserActionTypes.ADD_USER;
    constructor(public payload: User) { }
}

export type UserAction = AddItemAction