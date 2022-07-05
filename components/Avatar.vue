<template>
  <img 
    class="rounded-full border-2 border-white"
    :class="bigger ? 'w-16 lg:w-20 h-16 lg:h-20' : 'w-12 lg:w-16 h-12 lg:h-16'"
    :src="(user || {}).avatar ? user.avatar : defaultImage()" 
    @error="$event.target.src=defaultImage()"
  >
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    user: {
      type: Object,
      required: true
    },
    bigger: {
      type: Boolean
    }
  },
  methods: {
    defaultImage () {
      return `https://robohash.org/${(this.user || {}).name || 'anyRobot'}.png`
    }
  }
})
</script>
