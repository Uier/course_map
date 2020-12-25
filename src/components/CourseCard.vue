<template>
  <v-row no-gutters>
    <v-col
      v-for="{id, name, tags} in data"
      :key="id"
      cols="12"
      lg="6"
    >
      <v-hover v-slot:default="{ hover }">
        <v-card class="pa-4 ma-4" :elevation="hover ? 6 : 2" @click="handleClick(id)">
          <div class="d-flex flex-column">
            <div class="mb-2">{{ name }}</div>
            <div
              v-for="tag in tags"
              :key="tag"
              class="text-body-1"
            ># {{ tag }}</div>
          </div>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'CourseCard',

  props: {
    data: {
      type: Array,
    },
  },

  methods: {
    handleClick() {

    },
  },
}
</script>
