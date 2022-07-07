<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import type { NuxtSocket } from 'nuxt-socket-io'
import { mapState, mapMutations } from 'vuex'
import { Mutations } from '~/store/allMessages/types'
import { ScoreboardMutations } from '~/store/scoreboard/types'

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

        this.socket.on('entering', (welcomeMessage: any) => {
            this.pushMessage(welcomeMessage)
        })
        this.socket.on('scoreboard', (scoreboard: any) => {
            this.setScoreboard(scoreboard)
        })
        this.socket.on('alert_newUser', (newUser: any) => {
            newUser.alert = 'newUser'
            this.pushMessage(newUser)
        })
        this.socket.on('outgoingUser', (outgoingUser: any) => {
            outgoingUser.alert = 'outgoingUser'
            this.pushMessage(outgoingUser)
        })
        this.socket.on('historyRemovalAlert', (historyRemovalAlert: any) => {
            this.pushMessage(historyRemovalAlert)
        })
        this.socket.on('PreviousMessages', (messages: Array<any>) => {
            messages.forEach((message) => {
                this.pushMessage(message)
            })
        })
        this.socket.on('receivedMessage', (message: any) => {
            this.pushMessage(message)
        })
    },
    methods: {
        ...mapMutations('allMessages', {
            pushMessage: Mutations.PUSH_NEW_MESSAGE
        }),
        ...mapMutations('scoreboard', {
            setScoreboard: ScoreboardMutations.SET_SCOREBOARD
        }),
        sendText(text: string): void {
            if (this.socket) {
                const message = {
                    time: new Date(),
                    name: this.user.name,
                    avatar: this.user.avatar,
                    message: text,
                    color: this.user.color,
                    belongsToThisClient: false
                }
                this.socket.emit('sendMessage', message)
                message.belongsToThisClient = true
                this.pushMessage(message)
            }
        },
    }
})
</script>
