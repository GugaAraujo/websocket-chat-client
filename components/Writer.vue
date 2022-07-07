<template>
    <div class="m-auto mb-12 w-4/5">
        <WhoIsTyping class="max-w-screen-2xl" />
        <div class="shadow-lg h-12">
            <input ref="inputTextToSend" 
                v-model="textToSend" 
                type="text"
                class="form-textarea mt-1 p-3 block w-full h-full resize-none bg-white bg-opacity-50 backdrop-blur-xl rounded drop-shadow-lg focus:outline-none"
                @input="onTyping($event.target.value)" 
                @keydown.enter="onClickSendText"
            >
            <button class="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded" 
                :disabled="hasNoMessageToSend()"
                :class="hasNoMessageToSend() ? 'opacity-50 cursor-not-allowed' : ''" 
                @click="onClickSendText"
                >
                Enviar
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { mapState, mapMutations } from 'vuex'
import { Mutations } from '~/store/allMessages/types'
import IMessage from '@/interfaces/IMessage'
import WhoIsTyping from '~/components/WhoIsTyping.vue'

export default defineComponent({
    name: 'Writer',
    data() {
        return {
            textToSend: ''
        }
    },
    components: {
        WhoIsTyping
    },
    computed: mapState(['user']),
    methods: {
        ...mapMutations('allMessages', {
            pushMessage: Mutations.PUSH_NEW_MESSAGE,
        }),
        onTyping(inputValue: string): void {
            this.textToSend = inputValue
            this.typingAlert()
        },
        typingAlert(): void {     
            this.$store.dispatch(
                '$nuxtSocket/emit',
                {
                    label: 'socketInstance',
                    evt: 'typingAlert',
                    msg: this.user
                }
            )
        },
        onClickSendText(): void {
            if (this.textToSend) {
                const message: IMessage = {
                    time: new Date(),
                    name: this.user.name as string,
                    avatar: this.user.avatar as string,
                    message: this.textToSend,
                    color: this.user.color as string,
                    belongsToThisClient: false
                }

                this.sendToSocket(message)
                this.renderMessage(message)
                this.eraseText()
                
            }
        },
        sendToSocket(message: IMessage): void {
            this.$store.dispatch(
                '$nuxtSocket/emit',
                {
                    label: 'socketInstance',
                    evt: 'sendMessage',
                    msg: message
                }
            )
        },
        renderMessage(message: IMessage): void {
            message.belongsToThisClient = true
            this.pushMessage(message)
        },
        eraseText(): void {
            const input = this.$refs.inputTextToSend as HTMLInputElement
            input.value = ''
            input.focus()
            this.textToSend = ''
        },
        hasNoMessageToSend(): Boolean {
            return this.textToSend === null || this.textToSend === ''
        }
    }
})
</script>
