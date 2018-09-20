function solve(arr) {
    let result=[];
    let current=arr[0].split(/[^\w]/).filter(x=>x!=="");

    for (let i = 1; i < arr.length; i++) {

        let[town,lati,longi]=arr[i].split(/\s*\|\s*/).filter(x=>x!=='');
        let townObj={Town:town, Latitude:Number(lati), Longitude:Number(longi)};
        result.push(townObj)

    }
    console.log(JSON.stringify(result))

}
solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);