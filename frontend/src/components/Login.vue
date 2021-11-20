<template>
  <div class="md-layout md-gutter">
    <div class="md-layout-item"></div>
    <div class="md-layout-item">
      <md-card>
        <md-card-header>
          <div class="md-title">Log In</div>
        </md-card-header>
        <md-card-content>
          <md-field>
            <label>Username</label>
            <md-input v-model="type"></md-input>
          </md-field>
          <md-field :md-toggle-password="false">
            <label>Password</label>
            <md-input v-model="password" type="password"></md-input>
          </md-field>
        </md-card-content>
        <md-card-actions>
          <md-button class="md-raised md-primary" to="/dashboard">Login</md-button>
        </md-card-actions>
      </md-card>
    </div>
    <div class="md-layout-item"></div>
  </div>
</template>

<script>

export default {
  name: "Login",
  data() {
    return {}
  }
}
</script>

<style scoped>

</style>