<template>
  <v-container class="mt-6">
    <div class="d-flex flex-column">
      <div class="d-flex justify-center">
        <v-hover v-slot:default="{ hover }">
          <v-card
            class="px-4 py-10 mt-15 mx-3"
            :elevation="hover ? 6 : 2"
            width="500"
            @click="clickCard({ name: 'courses' })"
          >
            <div class="d-flex justify-center flex-wrap">
              <div class="d-flex justify-center align-center">
                <v-icon size="80" color="primary">mdi-magnify</v-icon>
              </div>
              <div>
                <v-card-title class="text-h4">查課工具</v-card-title>
                <v-card-subtitle>在這裡檢索所有課程</v-card-subtitle>
              </div>
            </div>
          </v-card>
        </v-hover>

        <v-hover v-slot:default="{ hover }">
          <v-card
            class="px-4 py-10 mt-15 mx-3"
            :elevation="hover ? 6 : 2"
            width="500"
            @click="clickCard({ name: 'users' })"
          >
            <div class="d-flex justify-center flex-wrap">
              <div class="d-flex justify-center align-center">
                <v-icon size="80" color="primary">mdi-map</v-icon>
              </div>
              <div>
                <v-card-title class="text-h4">探索課程地圖</v-card-title>
                <v-card-subtitle>在這裡檢索其他人的修課地圖</v-card-subtitle>
              </div>
            </div>
          </v-card>
        </v-hover>

        <v-hover v-slot:default="{ hover }">
          <v-card
            class="px-4 py-10 mt-15 mx-3"
            :elevation="hover ? 6 : 2"
            width="500"
            @click="clickCard({ name: 'user', params: { id: 1 } })"
          >
            <div class="d-flex justify-center flex-wrap">
              <div class="d-flex justify-center align-center">
                <v-icon size="80" color="primary">mdi-account</v-icon>
              </div>
              <div>
                <v-card-title class="text-h4">個人修課地圖</v-card-title>
                <v-card-subtitle>在這裡檢視自己的修課地圖和資訊</v-card-subtitle>
              </div>
            </div>
          </v-card>
        </v-hover>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'Home',

  methods: {
    clickCard(route) {
      this.$router.push(route)
    },
  },
}
</script>
