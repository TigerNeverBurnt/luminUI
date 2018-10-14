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
export default {
    computed:{
        itext: {
            get () {
                return this.$store.state.search_text
            },
            set (value) {
                this.$store.commit('setSearchText', value)
            }
        }
    }
}
</script>

<style>

</style>


