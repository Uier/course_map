<template>
  <div>
    <v-row no-gutters v-for="{id, author, time, tags, content, replies} in data" :key="id">
      <v-card class="pa-4 ma-4" width="100%">
        <div class="d-flex flex-column">
          <div class="d-flex align-center">
            <v-avatar size="32" color="primary" class="white--text">{{ avatar }}</v-avatar>
            <div class="text-body-1 ml-2">{{ author }}</div>
            <v-spacer />
            <div class="text-body-1">{{ time }}</div>          
          </div>
          <div class="d-flex mt-4">
            <v-chip class="rounded-0" label color="primary" v-for="tag in tags" :key="tag">{{ tag }}</v-chip>
          </div>
          <div class="d-flex my-4">
            <div class="pl-4">{{ content }} </div>
          </div>
          <v-divider class="my-2" />
          <v-btn color="primary" outlined>
            留言（{{replies.length}}）
          </v-btn>
        </div>
      </v-card>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
    },
  },
}
</script>
