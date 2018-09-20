function solve(arr,sortingType) {
    let ascending=((a,b)=>a-b)
    let descending=((a,b)=>b-a)
    let types={
    'asc':ascending,
        'desc':descending
    }
    return arr.sort(types[sortingType])
}

console.log(solve([14, 7, 17, 6, 8], 'asc'));;