<template>
    <span class="content-btn" @mouseenter="hover" @click="click" :style="cbStyle">
        <span class='content-prev' :class="{hide:true}">{{data.attr.title}}</span>
    </span>
</template>

<script>
export default {
    props:{
        /* 
            data:{
                id,
                name,
                prevIcon,
                color,
                url,
                ...
            } 
        */
        data:{
            type:Object,
            requrie:true,
            default:function(){
                return null;
            }
        }
    },
    data(){
        return {
            cbStyle:{}
        }
    },
    methods:{
        hover(){
            //show preview is defiened in css
            this.data.particle.hover();
        },
        click(){
            //open the coresponding page
        },
        init(){
            this.cbStyle={
                'transform':`translate3d(${this.data.particle.x}px,${this.data.particle.y}px,0px)`
            }
        }
    },
    mounted(){
        this.init();
    }

}
</script>

<style lang='scss'>
    .content-btn{
        position:absolute;
        top:0;
        left:0;
        display:block;
        width:16px;
        height:16px;
        margin:-8px -8px;
        background-color:transparent;
        transform-origin: center;
        .content-prev{
            display:none;
        }
        &:hover{
            & .content-prev{
                box-sizing: border-box;
                display:block;
                width:100px;
                height:100px;
                padding-top:60px;
                margin:-42px;
                border-radius: 50%;
                background:orange;
                color:white;
            }
        }
    }
</style>
