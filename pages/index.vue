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

<script lang="js">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  data () {
    return {
      textToSend: null,
      chatRoomMessages: [],
      user: {
        name: 'Tester',
        color: '#5183F5'
      }
    }
  },
  mounted () {
    this.socket = this.$nuxtSocket({
      name: 'home',
      channel: '/',
      reconnection: false
    })
    this.enterToChatRoom()
    this.socket.on('entering', (welcomeMessage) => {
      this.chatRoomMessages.push(welcomeMessage)
    })
    this.socket.on('receivedMessage', (message) => {
      this.chatRoomMessages.push(message)
    })
  },
  methods: {
    sendText () {
      this.socket.emit('sendMessage', { name: this.user.name, message: this.textToSend, color: this.user.color })
    },
    enterToChatRoom () {
      this.socket.emit('enteredUser', { name: this.user.name, color: this.user.color })
    }
  }
})
</script>
