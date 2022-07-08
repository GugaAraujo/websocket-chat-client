<template>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import type { NuxtSocket } from 'nuxt-socket-io'
import { mapState, mapMutations } from 'vuex'
import IMessage from '~/interfaces/IMessage'
import { Mutations } from '~/store/allMessages/types'
import { Scoreboard, ScoreboardMutations } from '~/store/scoreboard/types'
import { User, UserMutations } from '~/store/user/types'
import { WhoIsTyping, WhoIsTypingMutation } from '~/store/whoIsTyping/types'
import { AllUsers, AllUserMutations } from '~/store/allUsers/types'

export default defineComponent({
    name: 'Socket',
    data() {
        return {
            socket: null as NuxtSocket | null
        }
    },
    computed: mapState(['user']),
    mounted() {
        this.socket = this.$nuxtSocket({
            name: 'home',
            channel: '/',
            reconnection: false,
            persist: 'socketInstance',
        })
        
        this.socket.on('entering', (welcomeMessage: string) => {
            this.pushMessage(welcomeMessage)
        })
        this.socket.on('scoreboard', (scoreboard: Scoreboard) => {
            this.setScoreboard(scoreboard)
        })
        this.socket.on('registeredWithID', (id: string) => {
            this.setID(id)
        })
        this.socket.on('sendAllUsers', (allUsers: AllUsers) => {
            this.updateList(this.filterThisClientId(allUsers))
        })
        this.socket.on('typingAlert', (whoIsTyping: WhoIsTyping) => {
            this.setWhoIsTyping(whoIsTyping)
            setTimeout(() => {
                whoIsTyping.name = null
                this.setWhoIsTyping(whoIsTyping)
            }, 1500);
        })
        this.socket.on('alert_newUser', (newUser: User) => {
            newUser.alert = 'newUser'
            this.pushMessage(newUser)
        })
        this.socket.on('outgoingUser', (outgoingUser: User) => {
            outgoingUser.alert = 'outgoingUser'
            this.pushMessage(outgoingUser)
        })
        this.socket.on('historyRemovalAlert', (historyRemovalAlert: string) => {
            this.pushMessage(historyRemovalAlert)
        })
        this.socket.on('PreviousMessages', (messages: Array<IMessage>) => {
            messages.forEach((message) => {
                this.pushMessage(message)
            })
        })
        this.socket.on('receivedMessage', (message: IMessage) => {
            message.time = new Date()
            this.pushMessage(message)
        })
    },
    methods: {
        ...mapMutations('allMessages', {
            pushMessage: Mutations.PUSH_NEW_MESSAGE
        }),
        ...mapMutations('scoreboard', {
            setScoreboard: ScoreboardMutations.SET_SCOREBOARD,
        }),
        ...mapMutations('whoIsTyping', {
            setWhoIsTyping: WhoIsTypingMutation.SET_WHO_IS_TYPING
        }),
        ...mapMutations('user', {
            setID: UserMutations.SET_ID
        }),
        ...mapMutations('allUsers', {
            updateList: AllUserMutations.UPDATE_LIST
        }),
        filterThisClientId(allUsers: any): AllUsers {
            return allUsers.filter((user: User) => user.id !== this.user.id)
        }
    }
})
</script>
