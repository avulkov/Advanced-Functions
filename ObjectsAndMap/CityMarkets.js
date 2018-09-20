function solve(input) {
    let result = new Map()
    for (let inputElement of input) {
            let [city, product, amountOfSales, pricePerUnit] = inputElement.split(/[->:]+/)
        let productTotalIncome = Number(amountOfSales) * Number(pricePerUnit)
        if (!result.has(city)) {
            result.set(city, new Map())

        }
        result.get(city).set(product, productTotalIncome)



    }
    for (const [key, value] of result) {
        console.log(`Town - ${key}`)
        for (const [k, v] of value) {
            console.log(`$$$${k.trim()} : ${v}`)
        }
    }
}
solve(['Sofia -> Laptops HP -> 200 : 2000','Sofia -> Raspberry -> 200000 : 1500','Montana -> Portokals -> 200000 : 1'])