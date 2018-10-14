<template>
    <v-layout row wrap>
        <textArea></textArea>
        <textTitle></textTitle>
        <text-highlight></text-highlight>
    </v-layout>
</template>

<script>
    import textTitle from "./textTitle.vue";
    import textArea from "./textArea.vue";
    import textHighlight from "./textHighlight.vue"

    export default {
        components: {
            textTitle,
            textArea,
            textHighlight
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
