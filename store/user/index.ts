import { User, Mutations, MutationsInterface } from './types'

export const state = (): User => ({
  name: 'Dr Baixinho',
  color: '#5183F5'
})

export const mutations: MutationsInterface = {
  [Mutations.SET_USER] (state: User, newUser: User) {
    state.name = newUser.name
    state.color = newUser.color
    // Emmit ao Socket passando User no payload
  },
  [Mutations.CHANGE_COLOR] (state: User, newColor: string) {
    state.color = newColor
  }
}
