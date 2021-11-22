<template>
  <div>
    <Toolbar/>
    <div class="full-control">
      <md-list>
        <md-subheader>Data Sources</md-subheader>
        <div v-for="source in sources" :key="source.UrlName" md4>
          <SourceRowItem :source="source" />
        </div>
      </md-list>
    </div>
  </div>
</template>

<script>
import Toolbar from "@/components/Toolbar";
import SourceRowItem from "@/components/SourceRowItem";
import {mapGetters, mapActions, mapMutations} from 'vuex'

export default {
  name: "SourcesPage",
  components: {SourceRowItem, Toolbar},
  data() {
    return {}
  },
  methods: {
    ...mapMutations(['resetSources']),
    ...mapActions(['getSources']),
  },
  computed: mapGetters(['sources']),
  created() {
    this.getSources();
  },
}
</script>

<style scoped>

</style>