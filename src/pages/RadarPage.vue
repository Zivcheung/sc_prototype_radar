<template>
    <section class="radar-wrap">
        <section class="button-holder">
            <template v-for="btn in contentBtns">
                <content-btn :data="btn" :key="btn.id"></content-btn>
            </template>
        </section>
        <section id = "radar-canvas-holder" >
        </section>
    </section>
</template>

<script>
import emitter from "../utils/observer"
import RadarParticle from "../components/radar_canvas/RadarParticle.js";
import ButtonController from "../components/radar_canvas/ContentBtnController.js";
import pDataHolder from "../components/radar_canvas/pDataHolder.js"
import ContentBtn from "../components/radar_vue/ContentButton"
export default {
    components:{
        "content-btn":ContentBtn
    },
    data(){
        return {
            particles:[],
            contentBtns:[],

        }
    },
    methods:{
        renderParticle(_domRef){
            this.radarRender = new RadarParticle(_domRef);
            this.particles = pDataHolder.particles;
        },
        cEvent(){
            this.radarRender.hover();
        },
        generateMock(_num){
            let mock=[];
            for(let i=0;i<_num;i++){
                mock.push({
                    id:new Date().valueOf()+`${i}`,
                    attributes:{
                        title:"foo",
                        tags:"foo_tags"
                    }
                });
            }
            return mock;
        }
    },
    mounted(){
        this.renderParticle("#radar-canvas-holder");
        this.buttonController  = new ButtonController();
        let content = this.generateMock(100);
        emitter.$on('finished:radar',()=>{
            this.contentBtns = this.buttonController.setup(content);
        })

    },
}
</script>

<style lang='scss'>
    .radar-wrap{
        position:relative;
    }
    #radar-map{
        display:block;
    }
</style>
