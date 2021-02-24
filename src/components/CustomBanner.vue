<template>
  <div class="banner">
    <slot name="top"></slot>
    <!-- <span v-if="topIcon" :class="topIcon"> {{ topIcon }} </span> -->
    <slot></slot>
    <!-- <span v-if="bottomIcon" :class="bottomIcon"> {{ bottomIcon }} </span> -->
    <slot name="bottom"></slot>
  </div>
</template>

<script>
export default {
  name: "CustomBanner",
};
</script>