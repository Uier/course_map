<template>
  <v-container>
    <v-row class="pt-15" justify="center">
      <v-card>
        <v-card-text class="text--primary">課程名稱：運動數據分析與程式設計</v-card-text>
        <v-card-text class="text--primary">開課系所：通識</v-card-text>
        <v-card-text class="text--primary">
          標籤：
          <v-chip color="primary" label small class="mr-3">電腦科學——程式設計</v-chip>
          <v-chip color="primary" label small class="mr-3">電腦科學——Python</v-chip>
          <v-menu offset-y :close-on-content-click="false">
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon>
                <v-icon color="primary" v-on="on" v-bind="attrs">mdi-plus-box</v-icon>
              </v-btn>
            </template>
            <v-card width="500">
              <v-container>
                <v-row>
                  <v-col cols="6">
                    <v-select
                      v-model="cate"
                      :items="items"
                      color="primary"
                      outlined
                      label="標籤領域"
                      hide-details
                    />
                  </v-col>
                  <v-col cols="6">
                    <v-select
                      v-model="tag"
                      :items="tags"
                      :disabled="!cate"
                      color="primary"
                      outlined
                      label="標籤"
                      hide-details
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="6">
                    <v-btn color="primary" outlined>新增標籤領域</v-btn>
                  </v-col>
                  <v-col cols="6">
                    <v-btn color="primary" outlined :disabled="!cate">新增標籤</v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-menu>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    cate: null,
    tag: null,
    items: [
      '數學',
      '統計學',
      '電腦科學',
      '系統科學',
      '物理學',
      '化學',
      '生物學',
      '地球科學',
      '太空科學',
      '人類學',
      '考古學',
      '人文地理學',
      '經濟學',
      '政治學',
      '心理學',
      '社會學',
      '藝術',
      '文學',
      '哲學',
      '歷史',
      '語言',
      '工程學',
      '醫學',
      '健康科學',
      '建築學',
    ],
    tags: [
      'Python',
      'R',
      'SQL',
      'swift',
      '圖學',
      '程式設計',
      '網路',
      '網頁',
      '資料結構',
      '電路',
      'APP Inventor',
      'C',
      'C++',
      'JAVA',
      'MATLAB',
      'Python',
      'Scratch',
      'VB',
      'VC++',
      'WebGL',
      '人工智慧',
      '工程',
      '影像',
      '數學',
      '演算法',
      '物件導向',
      '程式設計',
      '組合語言',
      '計算機',
      '資料庫',
      '資料科學',
      '資訊專題',
      '軟體',
      '邏輯',
      '電子',
      '電路',
    ].sort(),
  }),
}
</script>

<style></style>
