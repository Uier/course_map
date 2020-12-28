<template>
  <div>
    <v-row>
      <div class="text-h5">課程資訊</div>
      <v-spacer />
      <!-- Like Button -->
      <v-btn
        :color="hasLiked ? 'secondary' : 'default'"
        @click="hasLiked = !hasLiked"
        outlined
        small
      >
        <v-icon small>{{ hasLiked ? 'mdi-heart' : 'mdi-heart-outline' }}</v-icon>
        {{ hasLiked ? '已收藏' : '收藏' }}
      </v-btn>
    </v-row>
    <ul class="mt-4">
      <li class="mt-2">課名：{{ info.name }}</li>
      <li class="mt-2">學期：{{ info.semester }}</li>
      <li class="mt-2">授課教師：{{ info.teacher }}</li>
      <li class="mt-2">開課系所：{{ info.department }}</li>
      <li class="mt-2">上課時間：{{ time }}</li>
      <li class="mt-2">上課地點：{{ info.location }}</li>
      <li class="mt-2">學分數：{{ info.credit }}</li>
      <li class="mt-2">標籤：{{ info.tags.join('、') }}</li>
      <li class="mt-2">
        課程內容：
        <p v-html="info.description" />
      </li>
      <!-- <li class="mt-2">評分方式：{{ info.grade }}</li> -->
      <!-- <li class="mt-2">推薦：</li> -->
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CourseInfo',

  props: {
    info: {
      type: Object,
    },
  },

  computed: {
    time() {
      let t = this.info.time
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

  data: () => ({
    hasLiked: false,
  }),
}
</script>
