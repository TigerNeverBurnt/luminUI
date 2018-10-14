<template>


    <el-row>
      <el-col :span="25" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 0">
        <el-card  shadow="always" >
              <!-- <el-tooltip class="item"  effect="dark" content="Tasty tomato" placement="right-start">
          <img src="https://www.vosizneias.com/wp-content/uploads/2018/10/AP18284573743989-725x483.jpg"   @click="open7" class="image">
          
          </el-tooltip> -->

          <el-popover
            placement="right-start"
            title="Hurricane"
            width="200"
            trigger="hover"
            content="content">
          <img slot="reference" src="https://www.vosizneias.com/wp-content/uploads/2018/10/AP18284573743989-725x483.jpg"   @click="dialogFormVisible = true" class="image">

            
          </el-popover>

        <el-dialog title="Images" :visible.sync="dialogFormVisible">
              <img  src="https://www.w3schools.com/css/img_5terre_wide.jpg" class="imageInbox">
              
        
              <el-collapse v-model="activeNames" @change="handleChange" >
                <el-collapse-item title="Check the Location" name="1">
                  
                       <googlemap/>

                </el-collapse-item>
                 <el-collapse-item title="Check the people" name="2">
                  
                    <!-- <div class="column"> -->
                  
                       <people/>
                    <!-- </div> -->

                </el-collapse-item>
              </el-collapse>


               

              <div slot="footer" class="dialog-footer">
                  <el-button @click="dialogFormVisible = false">Cancel</el-button>
                  <el-button type="primary" @click="dialogFormVisible = false">Save</el-button>
                </div>

                
        </el-dialog>

         
          
        </el-card>
      </el-col>
    </el-row>
    
</template>


<script>
import googlemap from './googlemap.vue'
import people from './people.vue'

export default {
  components:{
   googlemap,
    people
  },
  data: {
    labelPosition: "right",
    formLabelAlign: {
      name: "",
      region: "",
      type: ""

    }
  },
  data() {
    return {
     
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {},
      activeNames: ["0"],
      formLabelWidth: "120px",

    };
  },
  mounted() {
     
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
    open5() {
      // this.$alert('<img src="https://upload.wikimedia.org/wikipedia/commons/8/88/Bright_red_tomato_and_cross_section02.jpg" class="imageInbox">', 'Picture', {
      //   dangerouslyUseHTMLString: true,
      //   center: true
      // });
    },
    open7() {
      this.$confirm(
        '<img src="https://www.w3schools.com/css/img_5terre_wide.jpg" class="imageInbox">',
        "images",
        {
          dangerouslyUseHTMLString: true,

          confirmButtonText: "yes",
          cancelButtonText: "cancel",
          // type: 'warning',
          center: true
        })
        .then(() => {
          // this.$message({
          //   type: 'success',
          //   // message: '删除成功!'
          // });
        })
        .catch(() => {
          // this.$message({
          //   type: 'info',
          //   // message: '已取消删除'
          // });
        });
    }
    
    
  }
};
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
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  display: block;
  padding: 1px;
  display: block;
  max-width: 230px;
  max-height: 230px;
  width: auto;
  height: auto;
}

.imageInbox {
  max-width: 100%;
  height: auto;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.cen {
  text-align: center;
}
.clearfix:after {
  clear: both;
}
.elb {
  padding: 20;
}
.row::after {
    content: "";
    clear: both;
    display: table;
}


</style>

