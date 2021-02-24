<template>
  <div>
    <h2>Radio</h2>
    <button @click="sendMessage">Send message to receiver!</button>
  </div>
</template>

<script>
export default {
  name: 'Radio',
  methods: {
    sendMessage() {
      this.$emit('message-sent', 
      {
        message: 'Victor Uniform Echo is Awesome'
      })
    }
  }
}
</script>