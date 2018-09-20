function solve(input) {
    let arr=input.join(' ').split(/[><-]/).filter(x=>x!=='');
    let obj={};
    for (let i = 0; i < arr.length; i++) {
        if(!obj.hasOwnProperty(arr[i])){
            obj[`${arr[i]}`]=1;
        }
        else{
            obj[`${arr[i]}`]++
        }

    }
    console.log(JSON.stringify(obj));
}
solve(['Far too slow,you\'re far too slow ']);
solve(['how are you ?' ,'I dont know how are you']);