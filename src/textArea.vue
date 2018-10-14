<template>
    <el-input
        type="textarea"
        :rows="20"
        placeholder="Please input"
        v-model="message"
        class="tarea">
    </el-input>
</template>

<script>
import { mapState } from 'vuex'
var timeout = null;
export default {
    computed:{
        message: {
            get () {
                return this.$store.state.main_text
            },
            set (value) {
                clearTimeout(timeout);
                timeout = setTimeout(()=>{
                    this.$store.dispatch('SetMainText', value);
                },2000);
                
            }
        }
    }
}
</script>

<style>
.tarea {
    margin-bottom : 2em;
}
</style>
