function solve(input) {
    let juice={};
    let bottles=new Map();
    for (let arr of input) {

       let[juiceType,quantity]=arr.split(' => ')
            if(!juice.hasOwnProperty(juiceType)){
                juice[juiceType]=Number(quantity)

            }
            else {
                juice[juiceType] += Number(quantity)
            }
        let counter=0;
        while(juice[juiceType]>999){
            juice[juiceType]-=1000
            counter++;
        }
        if(!bottles.has(juiceType)){
            if(counter!==0)
            bottles.set(juiceType,counter)
        }
        else {
            bottles.set(juiceType, bottles.get(juiceType) + counter)
        }
    }
    for (let [k,v] of bottles) {
        if(v!==0)
        console.log(`${k} => ${v}`)
    }

}
solve(['Orange => 2000','Peach => 1432','Banana => 450','Peach => 600','Strawberry => 549'])
solve(['Kiwi => 234','Pear => 2345','Watermelon => 3456','Kiwi => 4567','Pear => 5678','Watermelon => 6789'])