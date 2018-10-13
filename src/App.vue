<template>
  <div id="app">
    <div>
      <el-button icon="el-icon-service" circle></el-button>
    </div>

  </div>
</template>

<script>
export default {
  methods: {
    startHacking () {
      this.$notify({
        title: 'It works!',
        type: 'success',
        message: 'We\'ve laid the ground work for you. It\'s time for you to build something epic!',
        duration: 5000
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
  
}
.type1 {
    width: 2%;
    height:2%;
    text-align: center;
    border-radius: 50%;
    border: 2px solid black;
}
</style>
