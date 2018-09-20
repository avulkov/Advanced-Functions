function solve() {
    let typeCount=new Map()
    for (let arg of arguments) {
        let type =typeof  arg
        if(!typeCount.has(type)){
            typeCount.set(type,1)
        }else{
            typeCount.set(type,typeCount.get(type)+1)
        }
        console.log(`${type}: ${arg}`);
    }
    [...typeCount].sort((a,b)=>b[1]-a[1]).forEach(x=>console.log(`${x[0]} = ${x[1]}`))
}
solve({ name: 'bob'}, 3.333, 9.999)