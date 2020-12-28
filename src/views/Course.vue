<template>
  <v-container class="mt-6">
    <v-row v-if="info">
      <!-- Course Info -->
      <v-col cols="12" md="6">
        <CourseInfo :info="info" />

        <CourseCard :data="info.recommendCourses" />
      </v-col>

      <!-- Course Discussion -->
      <v-col cols="12" md="6">
        <div class="text-h5">評價討論區</div>

        <!-- Filter by Text -->
        <v-text-field
          v-model="searchText"
          class="mt-4"
          label="快速搜尋"
          outlined
          hide-details
          append-icon="mdi-magnify"
          single-line
          dense
        />

        <!-- Filter by Tags -->
        <v-btn
          v-for="(tag, index) in ['問題', '心得', '評價', '風格', '其他']"
          :key="tag"
          class="ml-2 mt-2"
          tile
          small
          depressed
          color="primary"
          :outlined="!check[index]"
          @click="$set(check, index, !check[index])"
        >
          <v-icon v-show="check[index]">mdi-check</v-icon>
          {{ tag }}
        </v-btn>

        <!-- <CourseDiscussion :data="info.discussion.posts" /> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CourseInfo from '@/components/CourseInfo'
import CourseCard from '@/components/CourseCard'
// import CourseDiscussion from '@/components/CourseDiscussion'
import { courses } from '@/data/courses'

export default {
  name: 'Course',

  components: { CourseInfo, CourseCard },

  computed: {
    info() {
      return this.$route.params.id ? courses[`${this.$route.params.id}`] : null
    },
  },

  data() {
    return {
      check: [false, false, false, false, false],
      searchText: '',
    }
  },
}
</script>

<style></style>
