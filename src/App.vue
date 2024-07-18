<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Index',
  methods: {
    goToMarketing() {
      this.$router.push('/marketing');
      this.$router.push('/marketing/index');
    }
  }
}
</script>

<style scoped>
/* Tu CSS aquí */
</style>