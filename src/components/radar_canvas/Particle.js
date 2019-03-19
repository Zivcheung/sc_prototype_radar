import BasicParticle from "./BasicParticle";

class Particle extends BasicParticle {
    /* 
        new CustomButton("ico_powerdream.png", 160, 160, 0xFFFFFF, 1, 0x67666b, 1, 1.5); 
    */
    constructor(_t, _p,_i){
        super(_t,_p);
        this._target = new PIXI.Point(0,0);
        //tint
        this.tintMin = 1;
        this._tintAmount = 1;
        this._targetTint = 1;
        this._vel = 0.1;
        this.toShow = false;
        this.index= 0;
        this._circle = 0;
        this._bros = [];
        this._brosLen = 0;
        this._isArtist = false;
        this.idTime = 0;
        this.width=
            this.height = 
                this._targetSize = 3;
        this.type = 0; //0-->grid 1-->tag 2-->button

        //assign parameters 
        this.index = _i;
    }

    // add bros
    addBros(_bro){
        this._brosLen = this._bros.push(_bro);
    }
    

    //wave animation
    doWave(_n,_id,_tintAmount){
        if(this.type ==1){
            let _this = this;
            this.idWave  = _id;
            clearTimeout(this.idTime);
            this.idTime = setTimeout(function(){
                for(let i =0; i<_this.brosLen; i++){
                    _this.bros[i].doWave(_n-0.5,_id,_tintAmount);
                }
            },20)
        }else{
            this._targetTint = this.tintMin;
            if(_id != this.idWave && _n>3){
                let _this = this;
                this.idWave = _id;
                this.idTime&&clearTimeout(this.idTime);
                this.width = this.height = _n+this._targetSize; 
                this.idTime = setTimeout(function(){
                    for(let i=0;i<_this._brosLen;i++){
                        let bro = _this._bros[i]
                        bro.doWave(_n-0.9,_id,this._tintAmount);
                    }
                },20);
            }
        }
    }
    //interaction : hover 
    hover(){
        // this._tintAmount = 0;
        this.doWave(20,new Date().valueOf(),this._tintAmount);
    }
    //interaction : press (two states include on and off)
    press(_toggled){
        if(_toggled==void 0) _toggled = true;
        if(_toggled){
            this._tintAmount = -20;
            this.doWave(40,new Date().valueOf(),this._tintAmount)
        }else{
            this._tintAmount = -20;
            this.doWave(40,new Date().valueOf(),this._tintAmount)
        }
    }

    //animation 
    recoverLoop(){
        let reduce = (this._targetSize-this.width)>-0.2?0:(this._targetSize-this.width);
        this.width = this.height = this.width+reduce*this._vel;
    }

}

export default Particle;