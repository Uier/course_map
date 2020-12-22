<template>
  <v-container class="mt-6">
    <!-- Title -->
    <div class="text-h5">查詢課程</div>

    <v-row>
      <!-- Table -->
      <v-icon size="500">mdi-table</v-icon>

      <v-spacer />

      <!-- Query -->
      <v-col cols="6">
        <!-- Search by Text -->
        <v-text-field
          v-model="searchText"
          label="快速搜尋"
          outlined
          hide-details
          append-icon="mdi-magnify"
          single-line
          dense
        />

        <v-divider class="my-4" />

        <!-- Semester -->
        <v-row>
          <v-col cols="8">
            <v-select label="選擇學年度" v-model="year" :items="years" outlined dense />
          </v-col>
          <v-col cols="4">
            <v-select label="選擇學期" v-model="semester" :items="semesters" outlined dense />
          </v-col>
        </v-row>

        <div class="text-h6"># 預設都是全選</div>

        <!-- Department -->
        <v-row>
          <v-col cols="4">
            <v-select label="選擇學校" v-model="school" :items="schools" outlined dense multiple />
          </v-col>
          <v-col cols="4">
            <v-select label="選擇學院" v-model="college" :items="colleges" outlined dense multiple />
          </v-col>
          <v-col cols="4">
            <v-select label="選擇系所" v-model="depart" :items="departs" outlined dense multiple />
          </v-col>
        </v-row>

        <!-- Location -->
        <v-row>
          <v-col cols="12">
            <v-select label="選擇校區" v-model="campus" :items="campuses" outlined dense multiple />
          </v-col>
        </v-row>

        <!-- Tag -->
        <v-row>
          <v-col cols="12">
            <v-select label="選擇標籤" v-model="tag" :items="tags" outlined dense multiple />
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row>
      <CourseResult :data="data" :searchText="searchText" />
    </v-row>

    <br v-for="i in 10" :key="i" />
  </v-container>
</template>

<script>
import CourseResult from '@/components/CourseResult'

const years = ['109', '108', '107', '106', '105', '104', '103', '102', '101', '100', '99', '98']
const semesters = ['1', '2', '3']
const schools = ['臺大', '臺師大', '臺科大']
const colleges = ['選項一', '選項二', '選項三']
const departs = ['資工系', '電機系', '電子系', '機械系', '科技系', '學習科學學士學位學程']
const campuses = ['臺大總區', '臺大醫學院校區', '師大分部', '師大本部', '師大圖書館校區', '臺科大']
const tags = ['程式設計', '數學', '圖學', '網路', '網頁', '電路', 'C', 'C++', 'Python']

export default {
  name: 'Courses',

  components: { CourseResult },

  data: () => ({
    years,
    semesters,
    schools,
    colleges,
    departs,
    campuses,
    tags,
    searchText: '',
    year: '109',
    semester: '1',
    school: [],
    college: [],
    depart: [],
    campus: [],
    tag: [],
    data: [],
  }),
}
</script>
