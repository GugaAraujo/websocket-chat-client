import IMessage from '~/interfaces/IMessage'
import { AllMessages, Mutations, MutationsInterface } from './types'

export const state = (): AllMessages => ({
    list: []
})

export const mutations: MutationsInterface = {
    [Mutations.PUSH_NEW_MESSAGE](state: AllMessages, message: IMessage) {
        state.list.push(message)
    },
}
