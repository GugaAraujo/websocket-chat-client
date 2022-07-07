<template>
    <div
        class="mt-4 p-1 bg-white bg-opacity-50 backdrop-blur-xl rounded-xl drop-shadow-lg shadow-2xl m-auto w-4/5 lg:w-3/6 h-8 flex justify-around text-center text-white font-medium">
        <div class="inline">
            <span class="mr-3 lg:mr-20">
                {{ user.name }}
            </span>
            <span>
                on-line:
            </span>
            <span v-if="scoreboard" class="mr-3">
                {{ scoreboard.total }}
            </span>
            <span>
                record:
            </span>
            <span v-if="scoreboard">
                {{ scoreboard.record }}
            </span>
        </div>
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { mapState } from 'vuex'

export default defineComponent({
    name: 'ScoreBoard',
    computed: mapState(['scoreboard', 'user']),
})
</script>
