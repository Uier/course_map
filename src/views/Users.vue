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
        <v-btn color="primary" :disabled="checkbox">
          搜尋
        </v-btn>
      </v-col>
      <v-col cols="4">
        <v-checkbox class="pt-2 mt-0" v-model="checkbox" label="顯示與我關聯性高的地圖" />
      </v-col>
    </v-row>

    <v-divider class="my-4" />

    <v-row>
      <UserResult :data="userList" />
    </v-row>

    <br v-for="i in 10" :key="i" />
  </v-container>
</template>

<script>
import UserResult from '@/components/UserResult'
import { userList } from '@/data/users'

export default {
  name: 'Users',

  components: { UserResult },

  data: () => ({
    userList,
    searchText: '',
    checkbox: false,
  }),
}
</script>

<style></style>
