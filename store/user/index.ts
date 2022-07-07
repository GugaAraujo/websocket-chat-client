import { User, UserMutations, MutationsInterface } from './types'

export const state = (): User => ({
  name: null,
  color: '#212121',
  avatar: null
})

export const mutations: MutationsInterface = {
  [UserMutations.SET_USER] (state: User, newUser: User) {
    state.name = newUser.name

    if (newUser.color) {
      state.color = newUser.color
    }

    newUser.avatar
      ? state.avatar = newUser.avatar
      : state.avatar = `https://robohash.org/${newUser.name}.png`
  },
  [UserMutations.CHANGE_COLOR] (state: User, newColor: string) {
    state.color = newColor
  },
  [UserMutations.SET_ID](state: User, id: string) {
    state.id = id
  }
}
