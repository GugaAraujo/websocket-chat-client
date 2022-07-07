import { User, UserMutations, MutationsInterface } from './types'

export const state = (): User => ({
  name: null,
  color: '#000',
  avatar: null
})

export const mutations: MutationsInterface = {
  [UserMutations.SET_USER] (state: User, newUser: User) {
    state.name = newUser.name
    state.color = newUser.color

    if (newUser.color) {
      state.color = newUser.color
    }

    newUser.avatar
      ? state.avatar = newUser.avatar
      : state.avatar = `https://robohash.org/${newUser.name}.png`
    // Emmit ao Socket passando User no payload
  },
  [UserMutations.CHANGE_COLOR] (state: User, newColor: string) {
    state.color = newColor
  },
  [UserMutations.SET_ID](state: User, id: string) {
    state.id = id
  }
}
