import { MutationTree } from 'vuex/types/index'

export interface User {
    name: string | null;
    color: string;
    avatar?: string | null;
    alert?: string
}

export enum Mutations {
    SET_USER = 'SET_USER',
    CHANGE_COLOR = 'CHANGE_COLOR'
}

export type RootState = ReturnType<() => User>;

export interface MutationsInterface extends MutationTree<RootState> {
    [Mutations.SET_USER](state: User, parameter: User): void;
    [Mutations.CHANGE_COLOR](state: User, parameter: string): void;
}
