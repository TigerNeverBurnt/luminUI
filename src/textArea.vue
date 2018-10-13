<template>
    <el-input
            type="textarea"
            :rows="50"
            placeholder="Please input"
            v-model="textarea"
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
    margin-top : 2em;
}
</style>
