<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <div>
      <el-button @click="startHacking">Start</el-button>
    </div> -->
              <el-container style="height:100%; border: 1px solid #eee">
            <el-aside width="600px" style="background-color: rgb(238, 241, 246)">
              
            </el-aside>
            
            <!-- <el-container> -->
            <el-main>
              <textTitle/>
              

            <div >
          <textArea/>

          </div>
            </el-main>

                

              <!-- </el-container> -->
            
          </el-container>
          
    
  </div>
  
</template>

<script>

import textTitle from './textTitle.vue';
import textArea from './textArea.vue';

export default {
  components:{
    textTitle,
    textArea
  },
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
</style>
