<template>
  <form
    @submit.prevent="SET_USER(newUser)"
  >
    <label for="name">
      Nome
    </label>
    <input v-model="newUser.name" type="text" name="name">
    <label for="color">
      Cor
    </label>
    <input v-model="newUser.color" type="color" name="color">
    <label for="avatar">
      URL da foto
    </label>
    <input v-model="newUser.avatar" type="text" name="avatar">
    <button type="subtmit" :disabled="!newUser.name">
      Entrar
    </button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { mapMutations } from 'vuex'

export default defineComponent({
  name: 'Login',
  data () {
    return {
      newUser: {
        name: null,
        color: null,
        avatar: null
      }
    }
  },
  methods: {
    ...mapMutations('user', ['SET_USER'])
  }

})
</script>
