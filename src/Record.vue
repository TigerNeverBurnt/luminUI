<template>
    <div >
        <button v-on:click="record = !record">
            {{re}}
        </button>
        <vue-speech v-if="record" @onTranscriptionEnd="onEnd" hidden/>
    </div>

</template>

<script>


    export default {
        name:"Record",
        data(){
            return {
                record: false,
                re: "Start record!",
                test: true,
                words:[]
            }

        },
        methods:{
            onEnd ({ lastSentence, transcription }) {
                this.words = transcription
                alert(this.words)
                this.lastSentence = lastSentence
            }
        }
    }
</script>
