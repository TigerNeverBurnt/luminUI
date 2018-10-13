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
    <!-- <el-footer style="margin-bottom:0px; height:100%">Footer
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99296.49783267855!2d-92.4010505011079!3d38.94647296871662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87dcb79505ed8739%3A0xc18305329c07fb48!2sUniversity+of+Missouri!5e0!3m2!1sen!2sus!4v1537897164099" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
            </el-footer> -->
            
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
.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 100%;
  }
.type1 {
    width: 2%;
    height:2%;
    text-align: center;
    border-radius: 50%;
    border: 2px solid black;
}
 .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  body > .el-container {
    margin-bottom: 40px;
  }
</style>
    

