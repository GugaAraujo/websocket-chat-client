<template>
    <div class="flex flex-col justify-center mx-auto h-screen">
        <Socket />
        <NavBar />
        <ToolBar class="max-w-screen-2xl" />
        <Chat class="max-w-screen-2xl flex-grow" />
        <Writer class="max-w-screen-2xl" />
        <Footer />
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { mapState } from 'vuex'
import NavBar from '@/components/NavBar.vue'
import Chat from '@/components/Chat.vue'
import Writer from '@/components/Writer.vue'
import ToolBar from '~/components/ToolBar.vue'
import Footer from '~/components/Footer.vue'
import Socket from '~/components/Socket.vue'

export default defineComponent({
    name: 'Home',
    components: {
        Chat,
        Writer,
        NavBar,
        ToolBar,
        Footer,
        Socket
    },
    computed: mapState(['user']),
    mounted() {
        this.enterToChatRoom()
    },
    methods: {
        enterToChatRoom(): void {
            this.$store.dispatch(
                '$nuxtSocket/emit', // Remember, "emit" is namespaced to "$nuxtSocket"
                {
                    label: 'socketInstance',
                    evt: 'enteredUser',
                    msg: this.user
                }
            )
        }
    }
})
</script>
