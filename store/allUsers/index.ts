import { AllUsers, AllUserMutations, MutationsInterface } from './types'
import { User } from '../user/types';

export const state = (): AllUsers => ({
    list: []
})

export const mutations: MutationsInterface = {
    [AllUserMutations.UPDATE_LIST](state: AllUsers, updateList: User[]) {
        state.list = updateList
    },
}
