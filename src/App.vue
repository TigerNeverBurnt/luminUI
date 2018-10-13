<template>
  <div id="app">
    <el-container style="height:100%; border: 1px solid #eee">
      <el-aside width="600px" style="background-color: rgb(238, 241, 246)">
      </el-aside>
      <el-main>
          <InputField/>

      </el-main>  
    </el-container>
  </div>
</template>

<script>

import InputField from './InputField.vue';

export default {
  components:{
    InputField 
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
