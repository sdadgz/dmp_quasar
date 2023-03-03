<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
            flat
            dense
            round
            icon="menu"
            aria-label="Menu"
            @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          数据监测平台
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        bordered
    >
      <q-list>
        <q-item v-for="item in drawerContext" :to="item.url">
          <q-item-section>
            <q-icon :name="item.icon"/>
          </q-item-section>
          <q-item-section>
            {{ item.label }}
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">

import {ref} from 'vue';
import {DRAWERS} from "components/Drawer";

// 左侧栏控制
const leftDrawerOpen = ref(false);

// 左侧栏内容
const drawerContext = ref(DRAWERS);

// 左侧栏
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

</script>
