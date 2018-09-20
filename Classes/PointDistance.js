class Point {
    constructor(x,y){
        this.x=x
        this.y=y
    }
    static distance(a,b){
        const dx=a.x-b.x
        const dy=a.y-b.y
        return Math.sqrt(dx*dx+dy*dy)
    }
}
let dot=new Point(5,5)
let dots=new Point(9,8)
console.log(Point.distance(dot,dots))