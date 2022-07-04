<template>
  <div>
    <div v-if="message.name" class="mb-4 p-3 bg-white bg-opacity-50 backdrop-blur-xl rounded-xl drop-shadow-lg w-3/5 text-left flex flex-row border-2 border-green-400">
      <Avatar class="avatar bg-white" :user="message" />
      <div>
        <span class="ml-2 text-gray-500 text-xs">
          {{ message.time.split(' ')[0] }} -
        </span>
        <span class="font-medium" :style="`color: ${message.color}`">
          {{ message.name }}
        </span>
        : {{ message.message }}
      </div>
    </div>
    <div v-else class="mb-4 p-3 bg-white bg-opacity-50 backdrop-blur-xl rounded-xl drop-shadow-lg m-auto w-2/5 text-center">
      {{ message }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'Message',
  props: {
    message: {
      type: Object || String,
      required: true
    }
  }
})
</script>

<style scoped lang="css">
  .avatar{
    position: relative;
    right: 20px;
  }
</style>
