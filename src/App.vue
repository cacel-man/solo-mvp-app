<template>
  <div id="app">
    <AllEmotion v-if="allView"  @selectedYt1="setFilter1" @selectedYt2="setFilter2" @selectedYt3="setFilter3"/>
    <SelectedEmotion v-if="selectedView" :theYt="selectYt" @reset-view="resetView"/>
  </div>
</template>

<script>
// import axios from "axios"
import AllEmotion from './components/AllEmotion'
import SelectedEmotion from './components/SelectedEmotion'
// import { filter } from 'vue/types/umd'

export default {
  name: 'App',
  components: {
    AllEmotion,
    SelectedEmotion,
  },
  data: () => ({
    allView: true,
    selectedView: false,
    selectYt: ''
  }),
  methods: {
    setFilter1(value){
      this.selectYt = value
      this.allView = false
      this.selectedView = true
    },
    setFilter2(value){
      this.selectYt = value
      this.allView = false
      this.selectedView = true
    },
    setFilter3(value){
      this.selectYt = value
      this.allView = false
      this.selectedView = true
    },
    resetView(){
      this.allView = true;
      this.selectedView = false
    }
  },
};
</script>

<style>
div {
  margin: 0 auto;
}
body {
  background-color: black;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {
  width: 200px;
  height: 200px;
}


</style>
  
  