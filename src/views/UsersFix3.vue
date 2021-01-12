<template>
  <v-container class="mt-6">
    <v-row>
      <v-col cols="8" md="6">
        <v-text-field
          v-model="searchText"
          label="輸入任何標籤、課程名稱、系所或授課教師"
          outlined
          hint="依照條件搜尋地圖"
          persistent-hint
          append-icon="mdi-magnify"
          single-line
          :disabled="checkbox"
          dense
        />
      </v-col>
      <v-col cols="4" md="2">
        <v-btn color="primary" :disabled="checkbox" @click="refresh">
          搜尋
        </v-btn>
      </v-col>
      <v-col cols="4">
        <v-checkbox class="pt-2 mt-0" v-model="checkbox" label="顯示與我關聯性高的地圖" />
      </v-col>
    </v-row>

    <v-divider class="my-4" />

    <v-row>
      <UserResultFix :data="data" />
    </v-row>

    <br v-for="i in 10" :key="i" />
  </v-container>
</template>

<script>
import UserResultFix from '@/components/UserResultFix3'
import { userList } from '@/data/users'
import { courses } from '@/data/courses'
import { ME } from '@/constants'

export default {
  name: 'Users',

  components: { UserResultFix },

  data: () => ({
    userList,
    courses,
    me: ME,
    data: [],
    searchText: '',
    checkbox: false,
  }),

  watch: {
    checkbox() {
      if (!this.checkbox) return
      const tags = this.userList.find(u => u.id === this.me).tags
      this.data = this.userList.filter(u => {
        if (u.id === this.me) return false
        return tags.some(t => u.tags.includes(t))
      })
    },
  },

  methods: {
    refresh() {
      this.data = this.userList.filter(u => {
        if (u.id === this.me) return false
        const someCourse = u.courses.some(c => {
          const someName = this.courses[c].name.includes(this.searchText)
          const someTag = this.courses[c].tags.includes(this.searchText)
          const someTeacher = this.courses[c].teacher === this.searchText
          const someDepartment = this.courses[c].department === this.searchText
          return someName || someTag || someTeacher || someDepartment
        })
        const someDepartment = u.department === this.searchText
        return someCourse || someDepartment
      })
    },
  },
}
</script>

<style></style>
