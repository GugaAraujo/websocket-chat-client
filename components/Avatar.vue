<template>
  <img class="w-16 rounded-full" :src="user.avatar || defaultImage" @error="$event.target.src=defaultImage">
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
  data () {
    return {
      defaultImage: `https://robohash.org/${this.user.name}.png`
    }
  }
})
</script>
