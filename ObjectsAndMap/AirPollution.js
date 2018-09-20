function solve(matrix,array) {
    let result=[]
let arr=[]
let realMatrix=[]
        for (let i = 0; i < matrix.length; i++) {

            arr=matrix[i].split(' ').map(x=>+x)
realMatrix.push(arr)

        }


    for (let iElement of array) {
        let[force,index]=iElement.split(' ')
        switch (force){
            case'breeze':
                for (let i = 0; i < realMatrix.length; i++)
                {
                    for (let j = 0; j < realMatrix[i].length; j++) {
                        if(i===Number(index)){
                            realMatrix[i][j]-=15
                        }

                     }

                };break;
            case'gale':
                for (let i = 0; i < realMatrix.length; i++)
            {
                for (let j = 0; j < realMatrix[i].length; j++) {
                    if(j===Number(index)){
                        realMatrix[i][j]-=20
                    }

                }

            };break;
            case'smog':
                for (let i = 0; i < realMatrix.length; i++)
                {
                    for (let j = 0; j < realMatrix[i].length; j++) {
                        realMatrix[i][j]+=Number(index)

                    }

                };break;
        }

    }
   let polutedCounter=0;
    for (let i = 0; i < realMatrix.length; i++)
    {
        for (let j = 0; j < realMatrix[i].length; j++) {

            if(realMatrix[i][j]>50){
                polutedCounter++
                let cordinates=`[${i}-${j}]`
                result.push(cordinates)
            }

        }

    }
    if(polutedCounter>0){
        console.log(`Polluted areas: ${result.join(', ')}`)

    }
    else{
        console.log('No polluted areas')
    }

}
solve(['5 7 72 14 4','41 35 37 27 33','23 16 27 42 12','2 20 28 39 14','16 34 31 10 24'],['breeze 1','gale 2','smog 25'])
console.log()
solve([
    "5 7 3 28 32",
    "41 12 49 30 33",
    "3 16 20 42 12",
    "2 20 10 39 14",
    "7 34 4 27 24",
],["smog 11", "gale 3",
    "breeze 1", "smog 2"
])