<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Hello />
    <p>{{ formattedDate }}</p>
    <button @click="incrementMonth">Increment Month</button>
  </div>
</template>

<script>
// @ is an alias to /src

import Hello from "./components/Hello.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "app",
  components: {
    Hello,
  },
  computed: {
    ...mapGetters(['formattedDate']),
  },
  methods: {
    ...mapActions(['incrementMonth'])
  },
};
</script>
