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
export default {
    computed:{
        message: {
            get () {
                return this.$store.state.main_text
            },
            set (value) {
                this.$store.commit('setMainText', value)
            }
        }
    },
    methods:{
        setMainText(e){
            this.$store.commit('setMainText',e.target.value);
        }
    }
}
</script>

<style>
.tarea {
    margin-bottom : 2em;
}
</style>
