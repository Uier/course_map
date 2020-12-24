<template>
  <v-row no-gutters>
    <v-col
      v-for="{id, avatar, user, tags, occurence} in fake"
      :key="id"
      cols="12"
      sm="6"
      md="4"
      lg="3"
      xl="2"
    >
      <v-card class="pa-4 ma-4">
        <div class="d-flex">
          <!-- User img and name -->
          <div class="d-flex flex-column align-center justify-space-between">
            <v-avatar color="primary" class="white--text">{{ avatar }}</v-avatar>
            <div class="mt-2 text-body-1">{{ user }}</div>
          </div>
          <!-- User course info -->
          <div class="d-flex flex-column align-start ml-8">
            <div
              v-for="tag in tags"
              :key="tag"
              class="text-body-1"
            ># {{ tag }}</div>
            <div class="text-body-1">{{ tags[0] }} 課程數： {{ occurence }}</div>
          </div>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
/* eslint-disable vue/no-parsing-error */
const fake = [
  {
    id: 1,
    avatar: '陳',
    user: '陳冬天',
    tags: ['資訊安全', '程式設計', '圖學'],
    occurence: 3,
  },
  {
    id: 2,
    avatar: '劉',
    user: '劉春天',
    tags: ['程式設計', '數學', 'C++'],
    occurence: 5,
  },
  {
    id: 3,
    avatar: '林',
    user: '林夏天',
    tags: ['程式設計', '演算法', 'C++'],
    occurence: 6,
  },
  {
    id: 4,
    avatar: '林',
    user: '林夏天',
    tags: ['程式設計', '演算法', 'C++'],
    occurence: 6,
  },
  {
    id: 5,
    avatar: '林',
    user: '林夏天',
    tags: ['程式設計', '演算法', 'C++'],
    occurence: 6,
  },
  {
    id: 6,
    avatar: '林',
    user: '林夏天',
    tags: ['程式設計', '演算法', 'C++'],
    occurence: 6,
  },
  {
    id: 7,
    avatar: '林',
    user: '林夏天',
    tags: ['程式設計', '演算法', 'C++'],
    occurence: 6,
  },
  {
    id: 8,
    avatar: '林',
    user: '林夏天',
    tags: ['程式設計', '演算法', 'C++'],
    occurence: 6,
  },
  {
    id: 9,
    avatar: '林',
    user: '林夏天',
    tags: ['程式設計', '演算法', 'C++'],
    occurence: 6,
  },
  {
    id: 10,
    avatar: '林',
    user: '林夏天',
    tags: ['程式設計', '演算法', 'C++'],
    occurence: 6,
  },
  {
    id: 11,
    avatar: '林',
    user: '林夏天',
    tags: ['程式設計', '演算法', 'C++'],
    occurence: 6,
  },
]

export default {
  name: 'UserResult',

  props: {
    data: {
      type: Array,
    },
  },

  data: () => ({
    fake,
  }),
}
</script>

<style>

</style>