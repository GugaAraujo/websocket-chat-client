<template>
  <div>
    <Home v-if="user.name" />
    <Login v-else />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { mapState } from 'vuex'
import Login from '@/pages/Login.vue'
import Home from '@/pages/Home.vue'

export default defineComponent({
  name: 'IndexPage',
  components: {
    Login,
    Home
  },
  data () {
    return {
    }
  },
  computed: mapState(['user'])
})
</script>
