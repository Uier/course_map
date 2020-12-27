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
      <li class="mt-2">上課時間：{{ info.time }}</li>
      <li class="mt-2">上課地點：{{ info.campus }}</li>
      <li class="mt-2">學分數：{{ info.credit }}</li>
      <li class="mt-2">標籤：{{ info.tags.join('、') }}</li>
      <li class="mt-2">課程內容：{{ info.description }}</li>
      <li class="mt-2">評分方式：{{ info.grade }}</li>
      <li class="mt-2">推薦：</li>
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

  data: () => ({
    hasLiked: false,
  }),
}
</script>
