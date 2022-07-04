<template>
  <div class="mt-4 p-1 bg-white bg-opacity-50 backdrop-blur-xl rounded-xl drop-shadow-lg shadow-2xl m-auto w-4/5 lg:w-3/6 h-8 flex justify-around text-center text-white font-medium">
    <div class="inline">
      <span class="mr-3 lg:mr-20" :style="`color: ${user.color}`">
        {{ user.name }}
      </span>
      <span>
        on-line:
      </span>
      <span v-if="scoreboard.length" class="mr-3">
        {{ scoreboard[0].total }}
      </span>
      <span>
        record:
      </span>
      <span v-if="scoreboard.length">
        {{ scoreboard[0].record }}
      </span>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'ScoreBoard',
  props: {
    scoreboard: {
      type: Object,
      required: true
    },
    user: {
      type: Object,
      required: true
    }
  }
})
</script>
