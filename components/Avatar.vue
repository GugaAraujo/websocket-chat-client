<template>
  <img class="w-20 h-20 rounded-full border-2 border-white" :src="(user || {}).avatar ? user.avatar : defaultImage()" @error="$event.target.src=defaultImage()">
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  methods: {
    defaultImage () {
      return `https://robohash.org/${(this.user || {}).name || 'anyRobot'}.png`
    }
  }
})
</script>
