import { MutationTree } from 'vuex/types/index'
import IMessage from '~/interfaces/IMessage';

export interface AllMessages {
  list: Array<IMessage>;
}

export enum Mutations {
    PUSH_NEW_MESSAGE = 'PUSH_NEW_MESSAGE',
}

export type RootState = ReturnType<() => AllMessages>;

export interface MutationsInterface extends MutationTree<RootState> {
  [Mutations.PUSH_NEW_MESSAGE](state: AllMessages, parameter: IMessage): void;
}
