<template>
  <v-container class="mt-6">
    <!-- <div class="text-h1">看我自己</div> -->
    <network
      ref="network"
      :nodes="nodes"
      :edges="edges"
      :options="options"
      :events="['selectNode']"
      @select-node="handleClick"
    />
  </v-container>
</template>

<script>
export default {
  name: 'User',

  data() {
    return {
      nodes: [
        {id: 1,  label: 'circle',  shape: 'ellipse'},
        {id: 2,  label: 'ellipse', shape: 'ellipse'},
        {id: 3,  label: 'database',shape: 'ellipse'},
        {id: 4,  label: 'box',     shape: 'ellipse'},
        {id: 5,  label: 'diamond', shape: 'ellipse'},
        {id: 6,  label: 'dot',     shape: 'ellipse'},
        {id: 7,  label: 'square',  shape: 'ellipse'},
        {id: 8,  label: 'triangle',shape: 'ellipse'},
      ],
      edges: [
        {from: 1, to: 2},
        {from: 2, to: 3},
        {from: 2, to: 4},
        {from: 2, to: 5}, 
        {from: 5, to: 6},
        {from: 5, to: 7},
        {from: 6, to: 8},
      ],
      options: {
        edges: {
          color: 'lightgray'
        },
        height: '600px',
        interaction: {
          hover: true,
        },
        nodes: {
          borderWidth: 2,
        },
      }
    }
  },

  methods: {
    handleClick() {
      console.log('oh!!!')
    },
  },
}
</script>
