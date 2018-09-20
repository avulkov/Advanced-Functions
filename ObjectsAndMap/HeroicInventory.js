function solve(input) {
    let result=[];
    for (let inputElement of input) {
        let[name,lvl,items]=inputElement.split(' / ')
        let inventory=[]
        if(inputElement.length>2){
             inventory=items.split(', ')
        }
        let hero={name:name,level:Number(lvl),items:inventory}
        result.push(hero)
    }
    console.log(JSON.stringify(result))
}
solve(['Jake / 1000 / Gauss, HolidayGrenade'])