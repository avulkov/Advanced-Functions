class Circle {
    constructor(radius){
        this.radius=radius
    }
    get diameter(){
        return this.radius*2
    }
    set diameter(diameter){
        return this.radius=diameter/2
    }
    get area(){
        return Math.PI*this.radius*this.radius
    }
}
let circ=new Circle(2)

console.log(circ.diameter);