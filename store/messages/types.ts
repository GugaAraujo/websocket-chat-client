import { MutationTree } from 'vuex/types/index'

export interface State {
    name: string;
    color: string;
    message: string;
}

export interface Getters {
    color: (state: State) => string;
}

export enum Mutations {
    GET_MESSAGE = 'GET_MESSAGE'
}

export type RootState = ReturnType<() => State>

export interface MutationsInterface extends MutationTree<RootState> {
    [Mutations.GET_MESSAGE](s: State, p: string): void;
}
