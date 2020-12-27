<template>
  <v-container class="mt-6">
    <v-row v-if="info">
      <v-col cols="6">
        <v-card outlined height="150">
          <v-card-text class="text--primary">
            <div class="d-flex align-center justify-center">
              <div class="d-flex flex-column align-center">
                <v-avatar size="64" color="primary" class="white--text">{{
                  info.name[0]
                }}</v-avatar>
                <div class="text-h6 mt-4">{{ info.name }}</div>
              </div>
              <div class="d-flex flex-column align-center ml-10">
                <ul>
                  <li>臺師大</li>
                  <li>{{ info.department }}</li>
                  <li>標籤：{{ tags.join('、') }}</li>
                  <li>目前修課數：{{ info.courses.length }}</li>
                </ul>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card outlined class="pa-2" height="150" style="overflow-y: scroll">
          <v-card-title>
            <v-icon color="secondary" class="mr-2">mdi-heart</v-icon>
            收藏課程
          </v-card-title>
          <v-card-text class="text--primary">
            <div v-for="c in ['資料結構', '生活中的演算法', '假資料']" :key="c">
              <ul>
                <li>
                  <a>{{ c }}</a>
                </li>
              </ul>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <!-- <div class="text-h1">看我自己</div> -->
    <v-row>
      <v-col :cols="selectedId || selectedTag ? 6 : 12">
        <v-card outlined>
          <network
            ref="network"
            :nodes="nodes"
            :edges="edges"
            :options="options"
            :events="['click', 'selectNode', 'hoverNode', 'blurNode', 'deselectNode']"
            @click="click"
            @select-node="handleClick"
            @hover-node="handleHover"
            @blur-node="handleBlur"
            @deselect-node="handleCancel"
          />
        </v-card>
      </v-col>
      <v-col cols="6" v-if="selectedId || selectedTag">
        <div v-if="selectedId">
          <v-btn @click="handleCancel" class="mb-4" block color="primary" outlined>
            <v-icon>mdi-chevron-right</v-icon>
            隱藏課程資訊
          </v-btn>
          <CourseInfo :info="courses[`${this.selectedId}`]" />
        </div>
        <div v-else>
          <v-card outlined>
            <v-card-title>有 {{ selectedTag }} 標籤的課程</v-card-title>
            <v-card-text class="text--primary">
              <div v-for="c in coursesValue.filter(c => c.tags.includes(selectedTag))" :key="c.id">
                <ul>
                  <li>
                    <a>{{ c.name }}</a>
                  </li>
                </ul>
              </div>
            </v-card-text>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CourseInfo from '@/components/CourseInfo'
import { users } from '@/data/users'
import { courses } from '@/data/courses'

Object.defineProperty(String.prototype, 'hashCode', {
  value: function() {
    var hash = 0,
      i,
      chr
    for (i = 0; i < this.length; i++) {
      chr = this.charCodeAt(i)
      hash = (hash << 5) - hash + chr
      hash |= 0 // Convert to 32bit integer
    }
    return hash
  },
})

export default {
  name: 'User',

  components: { CourseInfo },

  computed: {
    info() {
      return this.$route.params.id ? users[`${this.$route.params.id}`] : null
    },
    tags() {
      if (!this.info) return []
      const cids = this.info.courses
      return [
        ...new Set(cids.map(cid => courses[`${cid}`].tags).reduce((a, b) => [...a, ...b], [])),
      ].slice(0, 3)
    },
    tagNodes() {
      return this.tags.map(tag => ({
        id: tag.hashCode(),
        label: `# ${tag}`,
        shape: 'ellipse',
        color: {
          border: '#4CAF50',
          background: '#4CAF50',
          hover: '#42BA40',
        },
      }))
    },
    courseNodes() {
      const cids = this.info.courses
      return cids.map(cid => ({
        id: cid,
        label: courses[`${cid}`].name,
        shape: 'ellipse',
      }))
    },
    nodes() {
      return [...this.tagNodes, ...this.courseNodes]
    },
    edges() {
      const cids = this.info.courses
      return cids
        .map(cid =>
          courses[`${cid}`].tags.map(tag => ({
            from: cid,
            to: tag.hashCode(),
          })),
        )
        .reduce((a, b) => [...a, ...b], [])
    },
  },

  data() {
    return {
      selectedId: null,
      selectedTag: null,
      courses,
      coursesValue: Object.values(courses),
      options: {
        edges: {
          hoverWidth: 0,
          color: 'lightgray',
        },
        height: '600px',
        interaction: {
          hover: true,
          hoverConnectedEdges: false,
          dragNodes: false,
          dragView: false,
          zoomView: false,
        },
        layout: {
          randomSeed: 1,
          clusterThreshold: 10,
        },
        nodes: {
          size: 50,
          borderWidth: 2,
          color: {
            background: '#1976D2',
            hover: '#2196F3',
            highlight: '#f06292',
          },
          font: {
            size: 18,
            color: '#FFF',
          },
        },
      },
    }
  },

  methods: {
    click(node) {
      if (!node.nodes.length) {
        this.handleCancel()
        return
      }
    },
    handleClick(node) {
      if (!node.nodes.length) {
        this.handleCancel()
        return
      }
      const tagNode = this.tagNodes.find(tagNode => tagNode.id === node.nodes[0])
      if (tagNode) {
        this.selectedTag = tagNode.label.substring(2)
      } else {
        this.selectedId = node.nodes[0]
      }
    },
    handleHover() {
      this.$refs.network.network.canvas.body.container.style.cursor = 'pointer'
    },
    handleBlur() {
      this.$refs.network.network.canvas.body.container.style.cursor = 'default'
    },
    handleCancel() {
      this.selectedId = null
      this.selectedTag = null
      this.$refs.network.unselectAll()
    },
  },
}
</script>
