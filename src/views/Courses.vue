<template>
  <v-container class="mt-6">
    <!-- Title -->
    <div class="text-h5">查詢課程</div>

    <v-row>
      <!-- Table -->
      <v-col cols="6">
        <ScheduleSelector
          :minTime="minTime"
          :maxTime="maxTime"
          :numDays="numDays"
          :selection="schedule"
          @onChange="handleDateChange"
        />
      </v-col>

      <v-spacer />

      <!-- Query -->
      <v-col cols="6">
        <!-- Semester -->
        <v-row>
          <v-col cols="12">
            <v-select
              label="選擇學年度和學期"
              v-model="semester"
              :items="semesters"
              outlined
              dense
            />
          </v-col>
          <!-- <v-col cols="4">
            <v-select label="選擇學期" v-model="semester" :items="semesters" outlined dense />
          </v-col> -->
        </v-row>

        <!-- Search by Text -->
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="searchText"
              label="課程名稱"
              outlined
              hide-details
              single-line
              dense
            />
          </v-col>
        </v-row>

        <!-- Department -->
        <v-row>
          <!-- Location -->
          <v-col cols="6">
            <v-select
              label="選擇校區"
              v-model="campus"
              :items="campuses"
              outlined
              dense
              multiple
              persistent-hint
              hint="上課地點必須在所選擇校區的其中一個"
            />
          </v-col>
          <!-- <v-col cols="6">
            <v-select label="選擇學校" v-model="school" :items="schools" outlined dense multiple />
          </v-col> -->
          <!-- <v-col cols="4">
            <v-select
              label="選擇學院"
              v-model="college"
              :items="colleges"
              outlined
              dense
              multiple
            />
          </v-col> -->
          <v-col cols="6">
            <v-select
              label="選擇系所"
              v-model="department"
              :items="departments"
              outlined
              dense
              multiple
              persistent-hint
              hint="開課系所必須是所選擇系所的其中一個"
            />
          </v-col>
        </v-row>

        <!-- Tag -->
        <v-row>
          <v-col cols="12">
            <v-combobox
              label="選擇標籤"
              v-model="tag"
              :items="tags"
              outlined
              dense
              multiple
              persistent-hint
              hint="課程必須是所選擇標籤的其中一個"
            />
          </v-col>
        </v-row>

        <v-btn block color="primary" @click="refresh">
          查詢
        </v-btn>
      </v-col>
    </v-row>

    <v-row>
      <CourseResult :data="data" />
    </v-row>

    <br v-for="i in 10" :key="i" />
  </v-container>
</template>

<script>
import CourseResult from '@/components/CourseResult'
import ScheduleSelector from 'vue-schedule-selector'
import { semesters, campuses, tags, departments } from '@/data/config'
import { courseList } from '@/data/courses'

const schools = ['臺大', '臺師大', '臺科大']
const colleges = ['選項一', '選項二', '選項三']

export default {
  name: 'Courses',

  components: { CourseResult, ScheduleSelector },

  data: () => ({
    semesters,
    schools,
    colleges,
    departments,
    campuses,
    tags,
    courseList,
    searchText: '',
    semester: '109-2',
    school: [],
    college: [],
    department: [],
    campus: [],
    tag: [],
    data: [],
    minTime: 8,
    maxTime: 21,
    numDays: 5,
    schedule: [],
  }),

  methods: {
    refresh() {
      let result = this.courseList.slice()
      result = result.filter(res => res.semester === this.semester)
      if (this.searchText.length > 0) {
        result = result.filter(res => res.name.includes(this.searchText))
      }
      if (this.campus.length > 0) {
        result = result.filter(res => this.campus.includes(res.location))
      }
      if (this.department.length > 0) {
        result = result.filter(res => this.department.includes(res.department))
      }
      if (this.tag.length > 0) {
        result = result.filter(res => res.tags.some(tag => this.tag.includes(tag)))
      }
      this.data = result
    },
    handleDateChange(newSchedule) {
      this.schedule = newSchedule
    },
  },
}
</script>
