<template>
  <v-app-bar app color="primary" height="56" elevate-on-scroll>
    <v-btn text class="text-body-1 text-none py-0 px-1 mr-2" :to="{ name: 'home' }" color="primary">
      <v-toolbar-title style="color: white;" class="font-weight-bold">
        選課地圖
      </v-toolbar-title>
    </v-btn>

    <v-spacer />

    <v-toolbar-items>
      <v-btn
        v-for="{ label, route } in headerItems"
        :key="label"
        :to="route"
        class="text-body-1 font-weight-bold"
        color="white"
        text
        exact
      >
        {{ label }}
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Header',

  computed: {
    headerItems() {
      return [
        {
          label: '探索課程',
          route: { name: 'courses' },
        },
        {
          label: '探索地圖',
          route: { name: 'users' },
        },
        {
          label: '個人頁面',
          route: { name: 'user', params: { id: 0 } },
        },
      ]
    },
  },
}
</script>
