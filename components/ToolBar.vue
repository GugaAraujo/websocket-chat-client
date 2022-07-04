<template>
  <div class="mt-4 p-1 bg-white bg-opacity-50 backdrop-blur-xl rounded-xl drop-shadow-lg shadow-2xl m-auto w-3/6 h-8 flex justify-around text-center text-white font-medium">
    <div class="inline w-1/3">
      <span :style="`color: ${user.color}`">
        {{ user.name }}
      </span>
    </div>
    <div v-if="scoreboard.length" class="inline w-1/3">
      <span>
        on-line:
      </span>
      <span>
        {{ scoreboard[0].total }}
      </span>
      <span>
        record:
      </span>
      <span>
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
