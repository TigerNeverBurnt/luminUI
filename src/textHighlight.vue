<template>
    <v-flex xs12>
        <v-card>
        <v-toolbar color="#343233" style="color:#efdab9;">
            <v-toolbar-title>Entity Highlight Pool</v-toolbar-title>
            <v-spacer></v-spacer>
        </v-toolbar>
        <v-card-text v-show=true id="highlight">
        </v-card-text>
        </v-card>
    </v-flex>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: "textHighlight"
    }
</script>

<style scoped>

</style>