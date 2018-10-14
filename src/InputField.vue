<template>
    <div>
        <textArea></textArea>
        <textTitle></textTitle>
    </div>
</template>

<script>
import textTitle from "./textTitle.vue";
import textArea from "./textArea.vue";
import axios from "axios";

export default {
  components: {
    textTitle,
    textArea
  },
  watch: {
    main_text: function(val) {
      this.query(val, null);
    },
    search_text: function(val) {
      this.query(null, val);
    }
  },
  methods: {
    query(a, b) {
      this.main_text = a ? a : this.main_text;
      this.search_text = b ? b : this.search_text;
      axios
        .post("http://10.7.61.9:5000", {
          main_text: this.main_text,
          search_text: this.search_text
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  data() {
    return {
      main_text: "",
      search_text: ""
    };
  }
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
