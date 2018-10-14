<template>
  <el-row>
    <el-col :span="25" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 0">
      <el-card shadow="always">

        <el-popover placement="right-start" v-bind:title="img.description" width="200" trigger="hover" v-bind:content="img.detail">
          <img slot="reference" v-bind:src="img.content_url"
            @click="dialogFormVisible = true" class="image">


        </el-popover>

        <el-dialog title="Images" :visible.sync="dialogFormVisible">
          <img v-bind:src="img.content_url" class="imageInbox">


          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="Check the Location" name="1">

              <googlemap />

            </el-collapse-item>
            <el-collapse-item title="Check the people" name="2">

              <!-- <div class="column"> -->

              <people />
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
    props:{
      img : Object,
    },
    components: {
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

    methods: {
      handleChange(val) {
        console.log(val);
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
    max-width: 330px;
    max-height: 330px;
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
    padding: 10px;
  }

  .row::after {
    content: "";
    clear: both;
    display: table;
  }
</style>