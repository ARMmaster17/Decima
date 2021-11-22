<template>
  <md-list-item>
    <md-icon>network_wifi</md-icon>
    <span class="md-list-item-text">{{ source.Name }}</span>
    <md-switch v-model="source.Enabled" />
  </md-list-item>
</template>

<script>
export default {
  name: "SourceRowItem",
  data() {
    return {}
  },
  props: ['source']
}
</script>

<style scoped>

</style>