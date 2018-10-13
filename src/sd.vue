<template>
    <el-row>
      <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 0">
        <el-card :body-style="{ padding: '0px' }">
          <img src="https://upload.wikimedia.org/wikipedia/commons/8/88/Bright_red_tomato_and_cross_section02.jpg" class="image">
          <div style="padding: 14px;" class="cen">
            <span>Tasty tomato</span>
            <div class="bottom clearfix">
              <el-button type="text" class="button">Save image</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
</template>

<script>

export default {
  
  data: {
    
    labelPosition: 'right',
    formLabelAlign: {
      name: '',
      region: '',
      type: ''
    }
  }
}

</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}

@import url("//unpkg.com/element-ui@2.4.8/lib/theme-chalk/index.css");
@import url("//unpkg.com/element-ui@2.4.8/lib/theme-chalk/index.css");
.time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 10;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
 .cen{
  text-align: center;
} 
  .clearfix:after {
      clear: both
  }
.elb{
  padding: 20;
}
</style>

