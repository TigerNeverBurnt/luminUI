<template>
<div align="center">
    <el-input 
          size="medium"
          suffix-icon=""
          placeholder="please input title" v-model="itext" clearable>
    </el-input>
    </div>
    
</template>

<script>
export default {
    data () {
        return{
        itext : ''
    }
    }
}
</script>

<style>

</style>


