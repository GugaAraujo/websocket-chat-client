import { Scoreboard, ScoreboardMutations, MutationsInterface } from './types'

export const state = (): Scoreboard => ({
    total: 0,
    record: 0
})

export const mutations: MutationsInterface = {
    [ScoreboardMutations.SET_SCOREBOARD](state, scoreboard) {
        state.total = scoreboard.total
        state.record = scoreboard.record
    },
}
