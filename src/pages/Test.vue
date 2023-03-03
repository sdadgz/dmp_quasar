<template>
  <iframe ref="map" src="src/pages/Test.html" class="full-width" style="height: 80vh"></iframe>
</template>

<script setup>

import {ref} from "vue";

const map = ref();

function log() {
  // console.log(map.value.setPoint(116.404, 39.915));
  console.log(map.value);
}

</script>

<style scoped>

</style>