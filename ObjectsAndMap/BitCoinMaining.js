function solve(input) {
    let bitcoin=11949.16
    let gramOfGold=67.51
    let bitcpinCounter=0
    let firstDay=0;
    let totalProduction=0
    let dayCounter=0
    for (let quantity of input  ) {
        dayCounter++
        let production=Number(quantity)*gramOfGold
        if(dayCounter%3===0){
            production=production*0.7
        }
         totalProduction+=production
        while(totalProduction>=bitcoin){
            totalProduction-=bitcoin
            bitcpinCounter++
            if(bitcpinCounter===1){
               firstDay=input.indexOf(quantity)+1
            }
        }
    }
    console.log(`Bought bitcoins: ${bitcpinCounter}`)
    if(bitcpinCounter!==0) {
        console.log(`Day of the first purchased bitcoin: ${firstDay}`)
    }
    console.log(`Left money: ${totalProduction.toFixed(2    )} lv.`)
}
solve(['100', '200', '300'])