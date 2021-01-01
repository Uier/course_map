<template>
  <v-row no-gutters>
    <v-col
      v-for="{ id, avatar, user, tags, occurence } in data"
      :key="id"
      cols="12"
      md="6"
      lg="4"
      xl="3"
    >
      <v-hover v-slot:default="{ hover }">
        <v-card class="pa-4 ma-4" :elevation="hover ? 6 : 2" @click="handleClick(id)">
          <div class="d-flex">
            <!-- User img and name -->
            <div class="d-flex flex-column align-center justify-space-between">
              <v-avatar color="primary" class="white--text">{{ avatar }}</v-avatar>
              <div class="mt-2 text-body-1">{{ user }}</div>
            </div>
            <!-- User course info -->
            <div class="d-flex flex-column align-start ml-8">
              <div v-for="tag in tags" :key="tag" class="text-body-1"># {{ tag }}</div>
              <div class="text-body-1">{{ tags[0] }} 標籤的課程修了 {{ occurence }} 堂</div>
            </div>
          </div>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'UserResult',

  props: {
    data: {
      type: Array,
      required: true,
    },
  },

  methods: {
    handleClick(id) {
      this.$router.push({ name: 'user', params: { id } })
    },
  },
}
</script>
