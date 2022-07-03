<template>
  <div>
    <h1>Websocket-chat-project</h1>
    <input
      v-model="textToSend"
      type="text"
    >
    <button @click="sendText">
      Enviar
    </button>
    <div>
      <ul>
        <li v-for="phrase in chatRoomMessages" :key="phrase">
          <p :style="`color: ${phrase.color || '#A2A2A5'}`">
            {{ phrase.time }} {{ phrase.name ? `${phrase.name}: ` : '' }} {{ phrase.message || phrase }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import type { NuxtSocket } from 'nuxt-socket-io'
import { mapState } from 'vuex'
import Avatar from '@/components/Avatar.vue'

export default defineComponent({
  name: 'Home',
  components: {
    Avatar
  },
  data () {
    return {
      socket: null as NuxtSocket | null,
      textToSend: null,
      chatRoomMessages: [] as any
    }
  },
  computed: mapState(['user']),
  mounted () {
    this.socket = this.$nuxtSocket({
      name: 'home',
      channel: '/',
      reconnection: false
    })
    this.enterToChatRoom()
    this.socket.on('entering', (welcomeMessage: any) => {
      this.chatRoomMessages.push(welcomeMessage)
    })
    this.socket.on('receivedMessage', (message: any) => {
      this.chatRoomMessages.push(message)
    })
  },
  methods: {
    sendText () : void {
      if (this.socket) {
        this.socket.emit('sendMessage', { name: this.user.name, message: this.textToSend, color: this.user.color })
      }
    },
    enterToChatRoom () : void {
      if (this.socket) {
        this.socket.emit('enteredUser', { name: this.user.name, color: this.user.color })
      }
    }
  }
})
</script>
