import { State, Getters, Mutations, MutationsInterface } from './types'

const color = '#000'

export const state = (): State => ({
  name: '',
  color,
  message: ''
})

export const getters: Getters = {
  color: state => state.color
}

export const mutations: MutationsInterface = {
  [Mutations.GET_MESSAGE] (state: State, newColor: string) {
    state.color = newColor
  }
}
