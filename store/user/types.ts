import { MutationTree } from 'vuex/types/index'

export interface User {
    id?: string;
    name: string | null;
    color: string;
    avatar?: string | null;
    alert?: string
}

export enum UserMutations {
    SET_USER = 'SET_USER',
    CHANGE_COLOR = 'CHANGE_COLOR',
    SET_ID = 'SET_ID'
}

export type RootState = ReturnType<() => User>;

export interface MutationsInterface extends MutationTree<RootState> {
    [UserMutations.SET_USER](state: User, parameter: User): void;
    [UserMutations.SET_ID](state: User, parameter: string): void;
    [UserMutations.CHANGE_COLOR](state: User, parameter: string): void;
}
