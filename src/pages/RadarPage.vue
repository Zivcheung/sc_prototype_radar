<template>
    <section id = "radar-map" @click=cEvent>
    </section>
</template>

<script>
import RadarParticle from "../components/radar_canvas/RadarParticle.js"
export default {
    data(){
        return {
            particleData:{}
        }
    },
    methods:{
        renderParticle(_domRef){
            this.radarRender = new RadarParticle(_domRef);
        },
        cEvent(){
            this.radarRender.hover();
        }
    },
    mounted(){
        this.renderParticle("#radar-map");
    }
}
</script>

<style>
    #radar-map{
        display:block;
    }
</style>
