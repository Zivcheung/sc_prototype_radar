import pDataHolder from './pDataHolder';
import particleEngine from './ParticleEngine';
import img from '../../assets/dot.png'

export default class RadarParticle{
    constructor(_domTarget){
        this._texturePath = img;
        this.dom = _domTarget;
        this.app = new PIXI.Application({
            width:pDataHolder.CANVAS_WIDTH,
            height:pDataHolder.CANVAS_HEIGHT,
            transparent:false,
            antialias:true,
            resolution:1,
            backgroundColor:"0x666666"
        })
        window.app = this.app;
        document.querySelector(`${_domTarget}`).appendChild(this.app.view)
        PIXI.loader
            .add(this._texturePath)
            .load(this.setup.bind(this));
    }
    setup(){
        this._texture = PIXI.loader.resources[this._texturePath].texture;
        this.mainContainer = new PIXI.Container();
        particleEngine.setup(this._texture);
        this.app.stage.addChild(particleEngine.particleContainer);
    }
    hover(){
        particleEngine.hover();
    }
}