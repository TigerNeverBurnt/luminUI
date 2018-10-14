<template>
<div align="center">
    <el-input 
          size="medium"
          suffix-icon=""
          placeholder="please input title" 
          v-model="itext" clearable>
    </el-input>
</div>
</template>

<script>
var timeout = null;
export default {
    computed:{
        itext: {
            get () {
                return this.$store.state.search_text
            },
            set (value) {
                clearTimeout(timeout);
                timeout = setTimeout(()=>{
                    this.$store.dispatch('SetSearchText', value);
                },2000);
            }
        }
    }
}
</script>

<style>

</style>


