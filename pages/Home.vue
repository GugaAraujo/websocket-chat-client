<template>
  <div class="flex flex-col h-screen">
    <NavBar :user="user" />
    <ToolBar :user="user" :scoreboard="scoreBoard" />
    <Chat class="flex-grow" :all-messages="chatRoomMessages" />
    <Writer @onClickSendText="sendText" />
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import type { NuxtSocket } from 'nuxt-socket-io'
import { mapState } from 'vuex'
import NavBar from '@/components/NavBar.vue'
import Chat from '@/components/Chat.vue'
import Writer from '@/components/Writer.vue'
import ToolBar from '~/components/ToolBar.vue'
import Footer from '~/components/Footer.vue'

export default defineComponent({
  name: 'Home',
  components: {
    Chat,
    Writer,
    NavBar,
    ToolBar,
    Footer
  },
  data () {
    return {
      socket: null as NuxtSocket | null,
      textToSend: null,
      scoreBoard: [] as any,
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
    this.socket.on('scoreboard', (scoreboard: any) => {
      this.scoreBoard.push(scoreboard)
    })
    this.socket.on('alert_newUser', (newUser: any) => {
      newUser.alert = 'newUser'
      this.chatRoomMessages.push(newUser)
    })
    this.socket.on('outgoingUser', (outgoingUser: any) => {
      outgoingUser.alert = 'outgoingUser'
      this.chatRoomMessages.push(outgoingUser)
    })
    this.socket.on('historyRemovalAlert', (historyRemovalAlert: any) => {
      this.chatRoomMessages.push(historyRemovalAlert)
    })
    this.socket.on('PreviousMessages', (messages: Array<any>) => {
      messages.forEach((message) => {
        this.chatRoomMessages.push(message)
      })
    })
    this.socket.on('receivedMessage', (message: any) => {
      this.chatRoomMessages.push(message)
    })
  },
  methods: {
    sendText (text: string) : void {
      if (this.socket) {
        const message = {
          time: new Date().toLocaleTimeString('pt-BR', { timeZone: 'America/Sao_Paulo' }),
          name: this.user.name,
          avatar: this.user.avatar,
          message: text,
          color: this.user.color,
          belongsToThisClient: false
        }
        this.socket.emit('sendMessage', message)
        message.belongsToThisClient = true
        this.chatRoomMessages.push(message)
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
