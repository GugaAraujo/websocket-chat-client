<template>
    <div class="m-auto mb-16 shadow-lg w-4/5 h-12">
        <input ref="inputTextToSend" v-model="textToSend" type="text"
            class="form-textarea mt-1 p-3 block w-full h-full resize-none bg-white bg-opacity-50 backdrop-blur-xl rounded drop-shadow-lg focus:outline-none"
            @keyup.enter="onClickSendText">
        <button class="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded" :disabled="hasNoMessageToSend()"
            :class="hasNoMessageToSend() ? 'opacity-50 cursor-not-allowed' : ''" @click="onClickSendText">
            Enviar
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { mapState, mapMutations } from 'vuex'
import { Mutations } from '~/store/allMessages/types'

export default defineComponent({
    name: 'Writer',
    data() {
        return {
            textToSend: null
        }
    },
    computed: mapState(['user']),
    methods: {
        ...mapMutations('allMessages', {
            pushMessage: Mutations.PUSH_NEW_MESSAGE
        }),
        onClickSendText(): void {

            const message = {
                time: new Date(),
                name: this.user.name,
                avatar: this.user.avatar,
                message: this.textToSend,
                color: this.user.color,
                belongsToThisClient: false
            }

            message.belongsToThisClient = true
        
            this.$store.dispatch(
                '$nuxtSocket/emit',
                {
                    label: 'socketInstance',
                    evt: 'sendMessage',
                    msg: message
                }
            )

            this.pushMessage(message)

            this.eraseText()
        },
        eraseText(): void {
            const input = this.$refs.inputTextToSend as HTMLInputElement
            input.value = ''
            input.focus()
            this.textToSend = null
        },
        hasNoMessageToSend(): Boolean {
            return this.textToSend === null || this.textToSend === ''
        }
    }
})
</script>
