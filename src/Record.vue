<template>
    <div >
        <button class="bt blue big" v-on:click="changeRecord">
            {{st}}
            <span>Two seconds</span>
        </button>

        <span v-if = "record">
        <p v-for="word in transcription">{{ word }}</p>
        <p>{{ runtimeTranscription }}</p>
        </span>
        <br>
        <textarea >{{textResult}}</textarea>

    </div>

</template>

<script>


    export default {
        name:"Record",
        props: {
            lang: {
                type: String,
                default: 'en-US'
            }
        },
        data(){
            return {
                record: false,
                words:[],
                textResult: "",
                st: "Start",
                runtimeTranscription: '',
                transcription: [],
                recognition: null
            }

        },
        methods:{
            changeRecord(){
                this.record = !this.record;
                if(this.record == true){
                    this.st = "Stop";
                    this.transcription = [];
                    this.runtimeTranscription = "";
                    this.checkApi();
                }
                else {
                    this.st = "Start";
                    this.recognition.stop();
                    // this.$store.commit('addMainText',this.runtimeTranscription)
                    // this.$store.dispatch('SetMainText',this.$store.getters.getMainText)
                    this.textResult = this.textResult + this.runtimeTranscription;

                    
                }
            },
            checkApi () {
                window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
                if (!SpeechRecognition && process.env.NODE_ENV !== 'production') {
                    throw new Error('Speech Recognition does not exist on this browser. Use Chrome or Firefox')
                }
                if (!SpeechRecognition || this.record == false) {
                    return
                }
                this.recognition = new SpeechRecognition()
                this.recognition.lang = this.lang
                this.recognition.interimResults = true
                this.recognition.addEventListener('result', event => {
                    const text = Array.from(event.results)
                        .map(result => result[0])
                        .map(result => result.transcript)
                        .join('')
                    this.runtimeTranscription = text

                })
                this.recognition.addEventListener('end', () => {
                    if (this.runtimeTranscription !== '') {
                        console.log(this.runtimeTranscription);
                        this.transcription.push(this.runtimeTranscription)
                        if(this.record == true){
                            console.log(this.runtimeTranscription);
                            this.$store.commit('addMainText',this.runtimeTranscription)
                            this.$store.dispatch('SetMainText',this.$store.getters.getMainText)
                        }
                        this.$emit('onTranscriptionEnd', {
                            transcription: this.transcription,
                            lastSentence: this.runtimeTranscription
                        })

                    }
                    this.runtimeTranscription = ''
                    this.recognition.start()

                })
                this.recognition.start()
            }
        },
        mounted () {
            //this.checkApi()

        }
    }
</script>
<style>
    .bt {
    display: inline-block;
    position: relative;
    margin: 10px;
    padding: 0 20px;
    text-align: center;
    text-decoration: none;
    font: bold 12px/25px Arial, sans-serif;

    text-shadow: 1px 1px 1px rgba(255,255,255, .22);

    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    border-radius: 30px;

    -webkit-box-shadow: 1px 1px 1px rgba(0,0,0, .29), inset 1px 1px 1px rgba(255,255,255, .44);
    -moz-box-shadow: 1px 1px 1px rgba(0,0,0, .29), inset 1px 1px 1px rgba(255,255,255, .44);
    box-shadow: 1px 1px 1px rgba(0,0,0, .29), inset 1px 1px 1px rgba(255,255,255, .44);

    -webkit-transition: all 0.15s ease;
    -moz-transition: all 0.15s ease;
    -o-transition: all 0.15s ease;
    -ms-transition: all 0.15s ease;
    transition: all 0.15s ease;
}

/**/


    .green {
    color: #3e5706;

    background: #a5cd4e; /* Old browsers */
    background: -moz-linear-gradient(top,  #a5cd4e 0%, #6b8f1a 100%); /* FF3.6+ */
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#a5cd4e), color-stop(100%,#6b8f1a)); /* Chrome,Safari4+ */
    background: -webkit-linear-gradient(top,  #a5cd4e 0%,#6b8f1a 100%); /* Chrome10+,Safari5.1+ */
    background: -o-linear-gradient(top,  #a5cd4e 0%,#6b8f1a 100%); /* Opera 11.10+ */
    background: -ms-linear-gradient(top,  #a5cd4e 0%,#6b8f1a 100%); /* IE10+ */
    background: linear-gradient(top,  #a5cd4e 0%,#6b8f1a 100%); /* W3C */
}

/* Blue Color */

.blue {
    color: #19667d;

    background: #70c9e3; /* Old browsers */
    background: -moz-linear-gradient(top,  #70c9e3 0%, #39a0be 100%); /* FF3.6+ */
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#70c9e3), color-stop(100%,#39a0be)); /* Chrome,Safari4+ */
    background: -webkit-linear-gradient(top,  #70c9e3 0%,#39a0be 100%); /* Chrome10+,Safari5.1+ */
    background: -o-linear-gradient(top,  #70c9e3 0%,#39a0be 100%); /* Opera 11.10+ */
    background: -ms-linear-gradient(top,  #70c9e3 0%,#39a0be 100%); /* IE10+ */
    background: linear-gradient(top,  #70c9e3 0%,#39a0be 100%); /* W3C */
}

/* Gray Color */

.gray {
    color: #515151;

    background: #d3d3d3; /* Old browsers */
    background: -moz-linear-gradient(top,  #d3d3d3 0%, #8a8a8a 100%); /* FF3.6+ */
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#d3d3d3), color-stop(100%,#8a8a8a)); /* Chrome,Safari4+ */
    background: -webkit-linear-gradient(top,  #d3d3d3 0%,#8a8a8a 100%); /* Chrome10+,Safari5.1+ */
    background: -o-linear-gradient(top,  #d3d3d3 0%,#8a8a8a 100%); /* Opera 11.10+ */
    background: -ms-linear-gradient(top,  #d3d3d3 0%,#8a8a8a 100%); /* IE10+ */
    background: linear-gradient(top,  #d3d3d3 0%,#8a8a8a 100%); /* W3C */

}

.big {
    padding: 40px 40px;
    padding-top: 10px;
    height: 45px;
    text-transform: uppercase;
    font: bold 20px/22px Arial, sans-serif;
}

.big span {
    display: block;
    text-transform: none;
    font: italic normal 12px/18px Georgia, sans-serif;
    text-shadow: 1px 1px 1px rgba(255,255,255, .12);
}
</style>
