<template>
  <div>
    <div v-if="isMessageFromOthers()" class="mb-6 p-3 bg-white bg-opacity-50 backdrop-blur-xl rounded-xl drop-shadow-lg shadow-2xl w-full lg:w-3/5 text-left flex flex-row">
      <Avatar class="avatar bg-white border-none shadow-2xl" :user="message" />
      <div class="messageFromOthers">
        <span class="text-gray-500 text-xs">
          {{ formatDate(message.time) }} -
        </span>
        <span class="font-medium" :style="`color: ${message.color}`">
          {{ message.name }}
        </span>
        <p class="mt-2">
          {{ message.message }}
        </p>
      </div>
    </div>
    <div v-else-if="message.belongsToThisClient" class="mb-6 p-3 bg-white bg-opacity-50 backdrop-blur-xl rounded-xl drop-shadow-lg shadow-2xl w-full lg:w-3/5 text-left ml-auto flex flex-row-reverse justify-between">
      <Avatar class="my-avatar bg-white border-none shadow-2xl" :user="message" />
      <div>
        <span class="ml-2 text-gray-500 text-xs">
          {{ formatDate(message.time) }} -
        </span>
        <span class="font-medium" :style="`color: ${message.color}`">
          {{ message.name }}
        </span>
        <p class="ml-2 mt-2">
          {{ message.message }}
        </p>
      </div>
    </div>
    <div v-else class="mt-2 mb-8 p-3 bg-white bg-opacity-50 backdrop-blur-xl rounded-xl drop-shadow-lg shadow-2xl m-auto w-full lg:w-2/5 text-center">
      <span v-if="message.alert">
        <span class="font-medium" :style="`color: ${message.color}`"> {{ message.name }} </span>
        <span v-if="message.alert === 'newUser'">
          entrou no
        </span>
        <span v-if="message.alert === 'outgoingUser'">
          saiu do
        </span>
        <span> chat </span>
      </span>
      <span v-else>
        {{ message }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'Message',
  props: {
    message: {
      type: [Object, String] as any,
      required: true
    }
  },
  methods: {
    isMessageFromOthers (): Boolean {
      
      return this.message.name && !this.message.belongsToThisClient && !this.message.alert
    },
    formatDate (dateString: string): string {
      return new Date(dateString).toLocaleTimeString('pt-BR', { timeZone: 'America/Sao_Paulo' })
    }
  }
})
</script>

<style scoped lang="css">
  .avatar{
    position: relative;
    bottom: 20px;
    right: 20px;
  }
  .messageFromOthers{
    position: relative;
    right: 10px;
  }
  .my-avatar{
    position: relative;
    left: 20px;
    bottom: 20px;
  }
</style>
