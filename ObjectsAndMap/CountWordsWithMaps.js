function solve(input) {
    let obj=new Map();
    let arr=input.join(' ').toLowerCase().split(/[^\w]+/).filter(x=>x!=='').forEach(word=>{
        if(!obj.has(word)){
            obj.set(word,1)
        }
        else{
            obj.set(word,obj.get(word)+1)
        }
    });
let allWords=Array.from(obj.keys()).sort();
    for (let w of allWords) {
        console.log(`'${w}' -> ${obj.get(w)} times`)
    }




}
    solve(['Far too slow,you\'re far too slow ']);
console.log('\n');
solve(['how are you ?' ,'I dont know how are you']);

