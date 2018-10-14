<template>
    <div>
        <v-btn fab dark fixed
               bottom
               right :color="activeColor" v-on:click="changeRecord">
            <v-icon dark>{{st}}</v-icon>
        </v-btn>
        <vue-speech @onTranscriptionEnd="onEnd"/>

    </div>

</template>

<script>


    export default {
        name: "Record",
        data() {
            return {
                record: false,
                words: [],
                text: "",
                st: "radio_button_checked",
                activeColor: "indigo"
            }

        },
        created: {
            func() {
                this.text = Vue.VueLocalStorage.get('text');
            }
        }
        ,
        methods: {
            changeRecord() {
                this.record = !this.record;
                if (this.record == true) {
                    this.st = "stop";
                    this.activeColor = "pink";
                }
                else {
                    this.st = "radio_button_checked";
                    this.activeColor = "indigo"
                    this.$nextTick(() => {
                        this.record = true
                    });

                }
            },
            onEnd({lastSentence, transcription}) {
                this.words = transcription
                this.text = this.text + lastSentence

            }
        }
    }
</script>
