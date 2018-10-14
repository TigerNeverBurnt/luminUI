<template>

    <!--<el-input
          size="medium"
          suffix-icon=""
          placeholder="please input title" 
          v-model="itext" clearable>
    </el-input>-->
    <v-flex xs12>
        <v-toolbar color="indigo">
            <v-toolbar-title>Search Reverse Filter Pool</v-toolbar-title>
            <v-spacer></v-spacer>
        </v-toolbar>
        <v-textarea
                full-width=true
                auto-grow
                autofocus=true
                solo
                counter=1000
                name="input"
                clearable=true
                value=""
                v-model="itext"
        ></v-textarea>
    </v-flex>
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


