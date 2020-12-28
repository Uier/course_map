<template>
  <v-card width="100%">
    <v-data-table
      :headers="headers"
      :items="data"
      :items-per-page="Number(-1)"
      hide-default-footer
      class="table"
      @click:row="handleRowClick"
    >
      <template v-slot:[`item.time`]="{ item }">
        {{ format(item.time) }}
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
const headers = [
  { text: '學期', value: 'semester' },
  { text: '課名', value: 'name' },
  { text: '教師', value: 'teacher' },
  { text: '系所', value: 'department' },
  { text: '時間', value: 'time' },
  { text: '地點', value: 'location' },
  { text: '學分', value: 'credit' },
  { text: '標籤', value: 'tags' },
  // { text: '評價數', value: 'comment' },
  // { text: '收藏', value: 'like' },
]

export default {
  name: 'CourseResult',

  props: {
    data: {
      type: Array,
      required: true,
    },
  },

  data: () => ({
    headers,
  }),

  methods: {
    handleRowClick(course) {
      let routeData = this.$router.resolve({ name: 'course', params: { id: course.id } })
      window.open(routeData.href, '_blank')
    },
    format(t) {
      t = t.replace(/'/g, '"')
      t = JSON.parse(t)
      let s = ''
      let f = true
      const ch = { 1: '一', 2: '二', 3: '三', 4: '四', 5: '五' }
      for (let i of ['1', '2', '3', '4', '5', '6']) {
        if (t[i].length > 0) {
          if (!f) s += '、'
          f = false
          s += ch[i]
          s += ' '
          s += t[i].join(',')
        }
      }
      return s
    },
  },
}
</script>

<style scoped>
.table >>> tbody tr :hover {
  cursor: pointer;
}
</style>
