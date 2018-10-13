<template>
  <div id="app">
    <el-container style="height:100%; border: 1px solid #eee">
      <el-aside width="600px" style="background-color: rgb(238, 241, 246)">
        <sd></sd>
      </el-aside>
      <el-main>
          <div>
              <Record ref="record"></Record>
          </div>
          <InputField/>
      </el-main>  
    </el-container>
  </div>
</template>

<script>

import InputField from './InputField.vue';
import Record from './Record.vue';
import sd from './sd.vue';
export default {
  components:{
    InputField,Record,sd
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
    

