<template>
    <el-input
        type="textarea"
        :rows="20"
        placeholder="Please input"
        v-model="textarea"
        @keydown.enter = "$emit('returnMainText',textarea)"
        class="tarea">
    </el-input>
</template>

<script>
export default {
    data(){
        return {
            textarea : ""
        }
    }
}
</script>

<style>
.tarea {
    margin-bottom : 2em;
}
</style>
