<template>
  <div class="row">
    <q-input class="q-ma-md" v-model="longitude" label="经度"/>
    <q-input class="q-ma-md" v-model="latitude" label="纬度"/>
    <q-btn class="q-ma-md" label="定位" color="secondary" @click="teleport"/>
    <q-btn class="q-ma-md" label="标点" color="primary" @click="addPoint"/>
  </div>
  <div id="mapId" class="full-width" style="height: 80vh;"></div>
</template>

<script setup>

import {onMounted, ref} from "vue";

// 百度地图的地图
let map = ref();

// 经纬度
const longitude = ref(116.404); // 经度
const latitude = ref(39.915); // 纬度

// 标点
function addPoint() {
  map.value.addOverlay(new BMapGL.Marker(new BMapGL.Point(longitude.value, latitude.value)));
}

// 传送
function teleport() {
  map.value.flyTo(new BMapGL.Point(longitude.value, latitude.value), 19);
}

// 获取定位
function getCurrentPoint() {
  new BMapGL.Geolocation().getCurrentPosition(res => {
    longitude.value = res.point.lng;
    latitude.value = res.point.lat;
    map.value.centerAndZoom(new BMapGL.Point(longitude.value, latitude.value), 19);
    map.value.setHeading(64.5);
    map.value.setTilt(73);
  });
}

// 装载
onMounted(() => {
  map = ref(new BMapGL.Map('mapId'));
  map.value.enableScrollWheelZoom(true);
  getCurrentPoint();
})

// 起始函数
function start() {

}

start();
</script>

<style scoped>

</style>