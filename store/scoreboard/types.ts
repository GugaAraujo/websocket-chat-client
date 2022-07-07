import { MutationTree } from 'vuex/types/index'

export interface Scoreboard {
  total: Number,
  record: Number
}

export enum ScoreboardMutations {
    SET_SCOREBOARD = 'SET_SCOREBOARD',
}

export type RootState = ReturnType<() => Scoreboard>;

export interface MutationsInterface extends MutationTree<RootState> {
  [ScoreboardMutations.SET_SCOREBOARD](state: Scoreboard, parameter: Scoreboard): void;
}
