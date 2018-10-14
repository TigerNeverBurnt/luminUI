<template>
  <el-row>
    <el-col :span="25" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 0">
      <el-card shadow="always">

        <el-popover placement="right-start" v-bind:title="img.description" width="200" trigger="hover" v-bind:content="img.detail">
          <img slot="reference" v-bind:src="img.content_url"
            @click="dialogFormVisible = true" class="image">


        </el-popover>

        <el-dialog :visible.sync="dialogFormVisible">
          <!-- <el-popover
            placement="bottom-start"
            width="200"
            trigger="hover"
            v-bind:content="img.">
            <el-button slot="reference">hover 激活</el-button>
           -->
 

          <img  v-bind:src="img.content_url" class="imageInbox">

          <!-- </el-popover> -->
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item v-if="img.lon && img.lat" title="Check the Location" name="1">

              <googlemap v-bind:lon="img.lon" v-bind:lat="img.lat"/>

            </el-collapse-item>
          </el-collapse>

          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">Cancel</el-button>
            <el-button type="primary" v-bind:href="img.content_url" v-bind:download="img.content_url" @click="dialogFormVisible=false">Save</el-button>
          </div>


        </el-dialog>
      </el-card>
    </el-col>
  </el-row>

</template>


<script>
  import googlemap from './googlemap.vue'

  export default {
    props:{
      img : Object,
    },
    components: {
      googlemap,
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
    max-width: 470px;
    max-height: 470px;
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