<template>
  <div>
    <h1>Receiver</h1>
    <Radio @message-sent="updateMessage" />
    <p> {{ message }} </p>
  </div>
</template>

<script>
import Radio from './Radio.vue'

export default {
  name: 'Receiver',
  components: {
    Radio
  },
  data: () => ({
    message: 'No messages'
  }),
  methods: {
    updateMessage(payload) {
      this.message = payload.message
    }
  },
}
</script>