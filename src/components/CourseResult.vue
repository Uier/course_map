<template>
  <v-card width="100%">
    <v-data-table
      :headers="headers"
      :items="data"
      :search="searchText"
      :items-per-page="Number(-1)"
      hide-default-footer
      class="table"
      @click:row="handleRowClick"
    />
  </v-card>
</template>

<script>
const headers = [
  { text: '學期', value: 'semester' },
  { text: '課名', value: 'name' },
  { text: '教師', value: 'teacher' },
  { text: '系所', value: 'depart' },
  { text: '時間', value: 'time' },
  { text: '地點', value: 'campus' },
  { text: '學分', value: 'credit' },
  { text: '標籤', value: 'tags' },
  { text: '評價數', value: 'comment' },
  { text: '收藏', value: 'like' },
]

export default {
  name: 'CourseResult',

  props: {
    data: {
      type: Array,
      required: true,
    },
    searchText: {
      type: String,
      required: true,
    },
  },

  data: () => ({
    headers,
  }),

  methods: {
    handleRowClick() {
      alert('click')
    },
  },
}
</script>

<style scoped>
.table >>> tbody tr :hover {
  cursor: pointer;
}
</style>
