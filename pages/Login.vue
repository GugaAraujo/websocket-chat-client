<template>
  <div class="mx-auto py-10 shadow-lg w-4/5 lg:w-1/4 flex justify-center bg-white bg-opacity-20 backdrop-blur-xl rounded drop-shadow-lg">
    <form
      @submit.prevent="SET_USER(newUser)"
    >
      <div class="mb-6 flex justify-center">
        <logo />
      </div>
      <div class="mb-6 flex justify-center">
        <Avatar :user="newUser" :bigger="true" />
      </div>
      <div class="mb-4">
        <input
          ref="name"
          v-model="newUser.name"
          type="text"
          name="name"
          maxlength="15"
          class="rounded p-1 w-full font-medium text-center"
          placeholder="Nome"
        >
      </div>
      <div class="mb-4">
        <input
          v-model="newUser.avatar"
          placeholder="URL da foto"
          type="text"
          name="avatar"
          class="rounded p-1 w-full font-medium text-center"
        >
      </div>
      <div class="mb-4 flex justify-center">
        <input v-model="newUser.color" type="color" name="color" class="input-color h-8 w-7" @change="changeColor($event.target.value)">
      </div>
      <button type="subtmit" class="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded" :class="newUser.name ? '' : 'opacity-50 cursor-not-allowed'">
        Entrar
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { mapMutations } from 'vuex'
import Avatar from '@/components/Avatar.vue'
import Logo from '@/components/Logo.vue'

export default defineComponent({
  name: 'Login',
  components: {
    Avatar,
    Logo
  },
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
    ...mapMutations('user', ['SET_USER']),
    changeColor (newColor: string) {
      const inputName = this.$refs.name as HTMLCanvasElement
      inputName.style.webkitTextFillColor = newColor
    }
  }

})
</script>

<style lang="css" scoped>
.input-color{
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent;
  cursor: pointer;
}
.input-color::-webkit-color-swatch {
  border-radius: 50%;
  border: 2px solid white;
}
.input-color::-moz-color-swatch {
  border-radius: 50%;
  border: 2px solid white;
}
</style>
