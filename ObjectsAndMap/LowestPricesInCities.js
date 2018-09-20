function solve(input) {
let result=new Map()
    for (let resultElement of input) {
        let[town,product,price]=resultElement.split(' | ')
        if(!result.has(product)){
            result.set(product,new Map())

        }
      result.get(product).set(town,price)
    }
    for (const [key, value] of result) {
    let sortedPrices=Array.from(value.keys()).sort((k1,k2)=>{
        return value[k1]-value[k2]
    })

        console.log(`${key} -> ${value.get(sortedPrices[0])} (${sortedPrices[0]})`)
    }
}
solve(['Sample Town | Sample Product | 1000'
    ,'Sample Town | Orange | 2'
    ,'Sample Town | Peach | 1'
    ,'Sofia | Orange | 3'
    ,'Sofia | Peach | 2'
    ,'New York | Sample Product | 1000.1'
    ,'New York | Burger | 10'])