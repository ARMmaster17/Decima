<template>
  <div>
    <Toolbar/>
    <div class="full-control">
      <md-list>
        <md-subheader>Data</md-subheader>
        <md-empty-state
            v-if="$route.params.source_id == null"
            md-icon="devices_other"
            md-label="No source selected"
            md-description="Start by selecting a source above, or enabling one on the Sources page.">
          <md-button to="/sources" class="md-primary md-raised">Enable a source</md-button>
        </md-empty-state>
      </md-list>
    </div>
  </div>
</template>

<script>
import Toolbar from "@/components/Toolbar";

export default {
  name: "DataPage",
  components: {Toolbar }
}
</script>

<style scoped>

</style>