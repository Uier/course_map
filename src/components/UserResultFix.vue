<template>
  <v-row no-gutters>
    <v-col v-for="{ id, avatar, user, stat } in dataFix" :key="id" cols="12" md="6" lg="4" xl="3">
      <v-hover v-slot:default="{ hover }">
        <v-card class="pa-4 ma-4" :elevation="hover ? 6 : 2" @click="handleClick(id)">
          <div class="d-flex">
            <!-- User img and name -->
            <div class="d-flex flex-column align-center justify-space-between">
              <v-avatar color="primary" class="white--text">{{ avatar }}</v-avatar>
              <div class="mt-2 text-body-1">{{ user }}</div>
            </div>
            <!-- User course info -->
            <div class="d-flex flex-column align-start ml-8" style="width: 100%">
              <div
                v-for="{ tag, cnt } in stat[0]"
                :key="tag"
                class="d-flex flex-column"
                style="width: 100%"
              >
                <div class="text-body-2">{{ tag }}</div>
                <div class="d-flex align-center" style="width: 100%">
                  <div style="width: 80%">
                    <v-progress-linear
                      color="primary"
                      background-color="grey lighten-1"
                      rounded
                      :value="(cnt / stat[1]) * 100"
                    />
                  </div>
                  <div class="text-body-2 ml-3">{{ Math.round((cnt / stat[1]) * 100) }}%</div>
                </div>
              </div>
            </div>
          </div>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script>
import { courses } from '@/data/courses'
export default {
  name: 'UserResult',

  props: {
    data: {
      type: Array,
      required: true,
    },
  },

  data: () => ({
    courses,
  }),

  computed: {
    dataFix() {
      return this.data.map(d => {
        const userCourses = d.courses.map(cid => this.courses[`${cid}`])
        const userTags = d.tags
          .map(tag => ({
            tag,
            cnt: userCourses.filter(c => c.tags.includes(tag)).length,
          }))
          .sort((a, b) => b.cnt - a.cnt)
          .slice(0, 3)
        return { ...d, stat: [userTags, userCourses.length] }
      })
    },
  },

  methods: {
    handleClick(id) {
      this.$router.push({ name: 'user', params: { id } })
    },
  },
}
</script>
