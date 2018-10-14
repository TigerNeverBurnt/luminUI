<template>

  <div id="app">
    <el-header>Tiger Hackkkkkkk</el-header>

    <el-container style="height:700px; border: 1px solid #eee">
      
      <el-aside width="300px" style="background-color: rgb(238, 241, 246)">
        <Pictures v-bind:img_array="this.$store.getters.getImgArray"></Pictures>
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
import Pictures from "./Pictures.vue";
export default {
  components: {
    InputField,
    Record,
    Pictures
  },
  data (){
    return{
  }
//       [
//       {
//           "content_url": "https://www.slrlounge.com/wp-content/uploads/2016/01/natural-light-couples-photography-whimsical-walk-1600x1066.jpg",
//           "date_published": "2018-08-29T22:09:00.0000000Z",
//           "description": null,
//           "detail": "Natural Light Couples Photography Workshop - SLR Lounge",
//           "host_page_url": "https://www.slrlounge.com/store-product/natural-light-couples-photography-workshop-dvd/#comments",
//           "thumbnail_url": "https://tse3.mm.bing.net/th?id=OIP.6MLBqvnE9K5KZ8ahCXcd8QHaE7&pid=Api"
//       },
//       {
//           "content_url": "https://www.slrlounge.com/wp-content/uploads/2016/01/natural-light-couples-photography-whimsical-walk-1600x1066.jpg",
//           "date_published": "2018-08-29T22:09:00.0000000Z",
//           "description": null,
//           "detail": "Natural Light Couples Photography Workshop - SLR Lounge",
//           "host_page_url": "https://www.slrlounge.com/store-product/natural-light-couples-photography-workshop-dvd/#comments",
//           "thumbnail_url": "https://tse3.mm.bing.net/th?id=OIP.6MLBqvnE9K5KZ8ahCXcd8QHaE7&pid=Api"
//       }
// ]
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
    

