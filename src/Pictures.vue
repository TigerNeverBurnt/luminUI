<template>
<div>
    <div v-if="img_array">
        <sd v-for="img in img_array" v-bind:img="img" :key="img.content_url"></sd>       
    </div>
</div>
</template>

<script>
import sd from './sd.vue';
import { mapState } from 'vuex'

export default {
    computed: mapState({
        img_array:state=>state.img_data
    }),
    data(){
        return{
            
        }
    },
    components: {
        sd
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