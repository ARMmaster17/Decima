<template>
  <p>{{ message }}</p>
</template>

<script>
import { fetchMessage } from '@/services/fetchers'

export default {
  name: "APITest",
  data() {
    return {
      message: ''
    }
  },
  async created() {
    try {
      this.message = await fetchMessage()
    }
    catch(error) {
      this.message = error
    }
  }
}
</script>

<style scoped>

</style>