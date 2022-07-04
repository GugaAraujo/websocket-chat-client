<template>
  <div ref="chatBox" class="m-auto my-4 p-4 shadow-lg w-4/5 h-72 bg-white bg-opacity-20 backdrop-blur-xl rounded drop-shadow-lg overflow-y-scroll">
    <div v-for="message in allMessages" :key="message">
      <Message :message="message" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Message from '@/components/Message.vue'

export default defineComponent({
  name: 'Chat',
  components: {
    Message
  },
  props: {
    allMessages: {
      type: Array,
      required: true
    }
  },
  watch: {
    allMessages: {
      async handler () {
        const chatbox = this.$refs.chatBox as HTMLDivElement
        await this.$nextTick()
        chatbox.scrollTop = chatbox.scrollHeight
      },
      deep: true
    }
  }
})
</script>
