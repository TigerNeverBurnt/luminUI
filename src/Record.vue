<template>
    <div >
        <button v-on:click="changeRecord">
            {{st}}
        </button>

        <vue-speech v-if="record" @onTranscriptionEnd="onEnd" />

        <br>
        <textarea >{{text}}</textarea>
    </div>

</template>

<script>


    export default {
        name:"Record",
        data(){
            return {
                record: false,
                words:[],
                text: "",
                st: "Start"
            }

        },
        created:{
            func(){
                this.text = Vue.VueLocalStorage.get('text');
            }
        }
        ,
        methods:{
            changeRecord(){
                this.record = !this.record;
                if(this.record == true){
                    this.st = "Stop";
                }
                else {
                    this.st = "Start";
                    this.$nextTick(() => {this.record = true});
                    window.location.reload();

                }
            },
            onEnd ({ lastSentence, transcription }) {
                this.words = transcription
                this.text = this.text+lastSentence
                Vue.VueLocalStorage.set('text', this.text);

            }
        }
    }
</script>
