function solve(input) {
    let catalogue = new Map()
    for (let arr of input) {
        let [product, price] = arr.split(' : ')
        if (!catalogue.has(product[0])) {
            catalogue.set(product[0], new Map())
            catalogue.get(product[0]).set(product, price)
        }
        else {
            catalogue.get(product[0]).set(product, price)
        }
    }

    let sortedLetters = Array.from(catalogue.keys()).sort()

    for (let letter of sortedLetters) {
        let elements = Array.from(catalogue.get(letter)).sort()
        console.log(letter)
        for (const [k,v] of elements) {
            console.log(`  ${k}: ${v}`)
        }


    }
}
solve(['Appricot : 20.4','Fridge : 1500','TV : 1499','Deodorant : 10','Boiler : 300','Apple : 1.25','Anti-Bug Spray : 15','T-Shirt : 10'])