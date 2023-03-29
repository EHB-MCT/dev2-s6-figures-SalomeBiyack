import Figure from "./Figure.js";

export default class Circle extends Figure{
    constructor(name,radius){
        super(name)
        this.radius=radius;
    }
    get diameter(){
        return this.radius*2
    }
}
