
class BasicParticle extends PIXI.Sprite {
    constructor(_texture,_position){
        super(_texture);
        this.anchor.x = 0.5;
        this.anchor.y = 0.5;
        this.scale.x = 0.5;
        this.scale.y = 0.5;
        this.position = _position;

    }
}

export default BasicParticle;
