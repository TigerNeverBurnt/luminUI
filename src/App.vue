<template>

  <div id="app">
    <el-header>Tiger Hackkkkkkk</el-header>

    <el-container style="height:700px; border: 1px solid #eee">
      
      <el-aside width="300px" style="background-color: rgb(238, 241, 246)">
      <sd/>  <sd/><sd/><sd/><sd/>  <sd/>
      </el-aside>
          
      <el-container>

      <el-main style="background-color: rgb(238, 241, 246)">
          <div>
              <Record ref="record"></Record>
          </div>
          <br><br>               

          <InputField/>
      </el-main> 
    </el-container>
            
              
    </el-container>  
  </div>
</template>

<script>
import InputField from "./InputField.vue";
import Record from "./Record.vue";
import sd from "./sd.vue";
export default {
  components: {
    InputField,
    Record,
    sd
  }
};
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 100%;
}
.type1 {
  width: 2%;
  height: 2%;
  text-align: center;
  border-radius: 50%;
  border: 2px solid black;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
body > .el-container {
  margin-bottom: 40px;
}
</style>
    

