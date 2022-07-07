import { MutationTree } from 'vuex/types/index'
import { User } from '../user/types';

export interface AllUsers {
  list: User[];
}

export enum AllUserMutations {
    UPDATE_LIST = 'UPDATE_LIST',
}

export type RootState = ReturnType<() => AllUsers>;

export interface MutationsInterface extends MutationTree<RootState> {
  [AllUserMutations.UPDATE_LIST](state: AllUsers, parameter: User[]): void;
}
