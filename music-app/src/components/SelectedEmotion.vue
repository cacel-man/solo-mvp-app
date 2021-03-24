<template>
    <div>
        <youtube :video-id="theYt" />
        <div id="resetbtn" @click="reset">
            HOME
        </div>
    </div>
        
</template>
<script>
import Vue from 'vue'
import VueYoutube from 'vue-youtube'

Vue.use(VueYoutube);
// console.log(this.props)

export default {
    name: "SelectedEmotion",
    props: ['theYt'],
    data() {
        return {
            videoId: '', 
            
        }
    },
    methods: {
        reset(){
            this.$emit("reset-view")
        }
    }
}
</script>