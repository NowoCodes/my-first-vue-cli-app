<template>
  <div id="app">
    <CustomBanner>
      <template v-slot:top>
        <div>😀 It worked!</div>
      </template>
      <p>
        <span>🏀</span>
        This is the Login Banner
        <span>🎾</span>
      </p>
      <template v-slot:bottom>
        <div>🐶 Hurray!</div>
      </template>
    </CustomBanner>
  </div>
</template>

<script>
// @ is an alias to /src

import CustomBanner from "./components/CustomBanner.vue";

export default {
  name: "app",
  components: {
    CustomBanner,
  },
};
</script>
