<template>
<div>
  <Toolbar/>
  <div>
    <md-empty-state
        md-icon="devices_other"
        md-label="Create your first project"
        md-description="Creating project, you'll be able to upload your design and collaborate with people.">
      <md-button class="md-primary md-raised">Create first project</md-button>
    </md-empty-state>
    <APITest/>
  </div>
</div>
</template>

<script>
import Toolbar from "@/components/Toolbar";
import APITest from "@/components/APITest";
export default {
  name: "Dashboard",
  components: {APITest, Toolbar}
}
</script>

<style scoped>

</style>