<template>
  <div class="m-auto mb-16 shadow-lg w-4/5 h-12">
    <input
      ref="inputTextToSend"
      v-model="textToSend"
      type="text"
      class="form-textarea mt-1 p-3 block w-full h-full resize-none bg-white bg-opacity-50 backdrop-blur-xl rounded drop-shadow-lg focus:outline-none"
      @keyup.enter="onClickSendText"
    >
    <button class="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded" :class="textToSend === null || textToSend === '' ? 'opacity-50 cursor-not-allowed' : ''" @click="onClickSendText">
      Enviar
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'Writer',
  emits: [
    'onClickSendText'
  ],
  data () {
    return {
      textToSend: null
    }
  },
  methods: {
    onClickSendText () {
      this.$emit('onClickSendText', this.textToSend)
      this.eraseText()
    },
    eraseText () {
      const input = this.$refs.inputTextToSend as HTMLInputElement
      input.value = ''
      input.focus()
      this.textToSend = null
    }
  }
})
</script>
