<template>
<div align="center">
    <el-input 
          size="medium"
          suffix-icon=""
          placeholder="please input title" 
          @keydown.enter = "$emit('returnSearchText','itext')"
          v-model="itext" clearable>
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


