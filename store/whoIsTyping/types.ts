import { MutationTree } from 'vuex/types/index'

export interface WhoIsTyping {
    name: string | null;
}

export enum WhoIsTypingMutation {
    SET_WHO_IS_TYPING = 'SET_WHO_IS_TYPING',
}

export type RootState = ReturnType<() => WhoIsTyping>;

export interface MutationsInterface extends MutationTree<RootState> {
    [WhoIsTypingMutation.SET_WHO_IS_TYPING](state: WhoIsTyping, parameter: WhoIsTyping): void;
}
