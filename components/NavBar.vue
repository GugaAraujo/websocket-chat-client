<template>
  <nav
    class="flex items-center justify-center lg:justify-between 2xl:justify-center flex-wrap bg-gradient-to-b from-blue-400 to-blue-500 p-6 shadow-lg">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <Logo />
    </div>
  </nav>
</template>

<script lang="ts">

import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'NavBar',
})
</script>
