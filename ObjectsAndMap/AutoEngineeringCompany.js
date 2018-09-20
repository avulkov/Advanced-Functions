function solve(input) {
let sales=new Map()
    for (let arr of input) {
        let[brand,model,quantity]=arr.split(' | ')
        if(!sales.has(brand)){
            sales.set(brand,new Map())
            sales.get(brand).set(model,Number(quantity))
        }
        else {
            if (!sales.get(brand).has(model)) {
                sales.get(brand).set(model, Number(quantity))
            }
            else{
                sales.get(brand).set(model,sales.get(brand).get(model)+ Number(quantity))
            }
        }
    }
    for (let [key, val] of sales) {
        console.log(key)
        for (const [k,v] of val) {
            console.log(`###${k} -> ${v}`)
        }
    }
}
solve(['Audi | Q7 | 1000'
    ,'Audi | Q6 | 100'
    ,'BMW | X5 | 1000'
    ,'BMW | X6 | 100'
    ,'Citroen | C4 | 123'
    ,'Volga | GAZ-24 | 1000000'
    ,'Lada | Niva | 1000000'
    ,'Lada | Jigula | 1000000'
    ,'Citroen | C4 | 22'
    ,'Citroen | C5 | 10','Audi | Q7 | 500'])