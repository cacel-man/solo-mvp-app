<template>
    <div class="allphoto">
        <img id='chill' src="https://i.pinimg.com/originals/0f/16/4a/0f164ad53bad03a52b390d2d523cdd5a.jpg" @click="setFilter1"/>
        <p># chill</p>
        <img id='happy' src="https://i.pinimg.com/originals/80/48/61/8048614a6d05dae3ae05a891072177a6.jpg" @click="setFilter2">
        <p># happy</p>
        <img id='sad' src="https://i.ytimg.com/vi/bfhDaqVcBnM/maxresdefault.jpg" @click="setFilter3">
        <p># sad</p>
    </div>
</template>
<script>
export default {
    name: 'AllEmotion',
    props: ['filter'],
    data() {
        return {
            data1: [],
            data2: [],
            data3: []
        }
    },
    async mounted() {
        console.log('here')
        await fetch("/api/type/chill").then(data => data.json()).then(data => this.data1 = data);
        // this.data1 = res1
        console.log(this.data1);
        await fetch("/api/type/happy").then(data => data.json()).then(data => this.data2 = data);
        await fetch("/api/type/sad").then(data => data.json()).then(data => this.data3 = data);
    },
    methods: {
        setFilter1(){
            console.log('aaa', this.data1);
            console.log(this.data1[0].URL)
            this.$emit("selectedYt1", this.data1[0].URL)
        },
        setFilter2(){
            console.log('aaa', this.data2);
            this.$emit("selectedYt2", this.data2[0].URL)
        },
        setFilter3(){
            console.log('aaa', this.data3);
            this.$emit("selectedYt3", this.data3[0].URL)
        }
    }
}
</script>