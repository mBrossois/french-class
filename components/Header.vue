<template>
  <div class="header">
    <ui-tab-bar v-model="active" type="textWithIcon" class="custom-demo-tab-bar">
      <ui-tab
        v-for="(tab, index) in tabs"
        :key="index"
        type="textWithIcon"
        :icon="tab.icon"
        v-on:click="updateRoute(tab.url, $router)"
      >
        {{ tab.text }}

      </ui-tab>
    </ui-tab-bar>
  </div>
</template>

<script lang="ts">
import VueRouter from 'vue-router'

declare module 'vue/types/vue' {
  interface Vue {
    $router: VueRouter
  }
}

const tabs = [
  {
    icon: 'class',
    url: '/today-lesson',
    text: "Today's lesson"
  },
  {
    icon: 'menu_book',
    url: '/previous-lessons',
    text: "Previous lessons"
  },
  {
    icon: 'insights',
    url: '/overview',
    text: "Overview"
  }
];

export default  {
  data() {
    return {
      tabs,
      active: 0
    };
  },
  methods: {
    updateRoute(url: string, router: VueRouter) {
      router.push(url);
    }
  }
};
</script>
