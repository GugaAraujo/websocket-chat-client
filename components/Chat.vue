<template>
  <div ref="chatbox"
    class="chatbox m-auto mt-4 p-4 shadow-lg w-4/5 bg-white bg-opacity-20 backdrop-blur-xl rounded drop-shadow-lg overflow-y-scroll">
    <div v-if="allMessages.list.length">
      <div v-for="(message, index) in allMessages.list" :key="index">
        <Message :message="message" />
      </div>
    </div>
    <div v-else class="flex justify-center">
      <DotsLoader />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Message from '@/components/Message.vue'
import DotsLoader from './DotsLoader.vue'
import { mapState } from 'vuex'

export default defineComponent({
  name: 'Chat',
  computed: mapState(['allMessages']),
  components: {
    Message,
    DotsLoader
},
  watch: {
    allMessages: {
      async handler() {
        const chatbox = this.$refs.chatbox as HTMLDivElement
        await this.$nextTick()
        chatbox.scrollTop = chatbox.scrollHeight
      },
      deep: true
    }
  }
})
</script>

<style lang="css">
.chatbox {
  /* Foreground, Background */
  scrollbar-color: #4291D4 rgb(173, 233, 235);
}

.chatbox::-webkit-scrollbar {
  width: 15px;
  /* Mostly for vertical scrollbars */
  height: 15px;
  /* Mostly for horizontal scrollbars */
}

.chatbox::-webkit-scrollbar-thumb {
  /* Foreground */
  background: #4291D4;
}

.chatbox::-webkit-scrollbar-track {
  /* Background */
  background: rgb(173, 233, 235);
}
</style>
