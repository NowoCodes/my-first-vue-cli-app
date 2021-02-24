<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- <p>{{ year }} - {{ month }} - {{ day }}</p> -->
  </div>
</template>

<script>
export default {
  name: "Hello",
  props: {
    msg: {
      type: String,
      default: "Hello World!",
    },
  },
};
</script>