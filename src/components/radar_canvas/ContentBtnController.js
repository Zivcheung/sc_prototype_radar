import pDataHolder from './pDataHolder.js';
let instance = null;
let _counter = 0;

export default class ContentBtnController{

    get counter(){
        return _counter;
    }

    constructor(){
        if(!instance){
            instance=this;
        }
        _counter+=1;
        return instance;
    }

    setup(_content){
        this.pPool=[];
        this.resetPool();
        this.buttonData=[];

        for(let i=0,len=_content.length;i<len;i++){
            let p = this.luckyDrawParticle();
            let bd = {
                particle:p,
                id:_content[i].id,
                attr:_content[i].attributes,
                tags:_content[i].attributes.tags
            }
            //setup particle size
            p.width=p.height=p._targetSize=pDataHolder.BUTTON_SIZE;
            p.type = 2;
            this.buttonData.push(bd);
        }
        return this.buttonData;
        

    }

    luckyDrawParticle(){
        let random = Math.floor(Math.random()*this.pPool.length+1);
        let p = pDataHolder.particles[random];
        this.pPool.splice(random,1)
        return p;
    }
    resetPool(){
        let particles=pDataHolder.particles;
        let len = particles.length;
        for(let i=0;i<len;i++){
            this.pPool.push(particles[i]);
        }
    }



}