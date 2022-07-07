import { WhoIsTyping, WhoIsTypingMutation, MutationsInterface } from './types'

export const state = (): WhoIsTyping => ({
    name: null,
})

export const mutations: MutationsInterface = {
    [WhoIsTypingMutation.SET_WHO_IS_TYPING](state: WhoIsTyping, whoIsTyping: WhoIsTyping) {
        state.name = whoIsTyping.name
    },
}
