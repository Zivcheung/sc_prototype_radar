import Particle from './Particle';
import pDataHolder from './pDataHolder.js';
import utils from '../../utils/renderUtil'

export default{
    isStart:false,
    particleNumber:0,

    setup(_t){
        this.particles=pDataHolder.particles;
        this._texture = _t;
        this.particleContainer = new PIXI.particles.ParticleContainer(1500,{
            vertices:true
        });

        let centerX = pDataHolder.CANVAS_WIDTH/2,
            centerY = pDataHolder.CANVAS_HEIGHT/2,
            radius =0,
            pNumber =1,
            radian,
            _rc;
        //generate circular grid layout
        for(let i=0;i<20;i++){
            radian = 2*Math.PI/pNumber;
            for(let j=0;j<pNumber;j++){
                _rc = radius / Math.cos(radian*0.5);
                let pos = new PIXI.Point(centerX + _rc * Math.cos(radian * (j + 1) - radian * .5), centerY + _rc * Math.sin(radian * (j + 1) - radian * .5));
                let p = new Particle(_t,pos,j);
                this.particleNumber = this.particles.push(p);
                this.particleContainer.addChild(p);
            }
            radius +=20;
            pNumber +=6;
        }

        //setup bro relationship
        for(let i=0;i<this.particleNumber;i++){
            this.setupBros(this.particles[i],25)
        }
    },

    //setup Bro relationship
    setupBros(_p,_dist){
        let p2;
        for(let i=0;i<this.particleNumber;i++){
            p2 = this.particles[i];
            if(utils.pointDist(_p.position,p2.position)<_dist){
                _p.addBros(p2)
            }
        }
    },
    
    //hover
    hover(){
        this.particles[20].hover();
    }

}