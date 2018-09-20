function solve(input) {
let towns=new Map();
    for (let i = 0; i < input.length; i++) {
        let[town,population]=input[i].split(/[<>-]/).filter(x=>x!=='')
        if(!towns.has(town)){
            towns.set(town,+population)
        }
        else{
            towns.set(town,towns.get(town)+ +population)
        }
    }


    let alltowns=Array.from(towns.keys())

    for (let city of alltowns) {
     console.log(`${city}: ${towns.get(city)}`)
    }


}
solve(['Sofia <-> 1200000','Montana <-> 20000','New York <-> 10000000','Washington <-> 2345000','Las Vegas <-> 1000000','Istanbul <-> 1000','Istanbul <-> 10000'])