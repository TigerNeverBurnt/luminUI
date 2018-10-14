<template>
    <v-layout row wrap>
        <textArea></textArea>
        <textTitle></textTitle>
    </v-layout>
</template>

<script>
    import textTitle from "./textTitle.vue";
    import textArea from "./textArea.vue";

    export default {
        components: {
            textTitle,
            textArea
        },
    };
</script>

<style>
    #app {
        font-family: Helvetica, sans-serif;
        text-align: center;
    }

    .type1 {
        width: 2%;
        height: 2%;
        text-align: center;
        border-radius: 50%;
        border: 2px solid black;
    }
</style>
