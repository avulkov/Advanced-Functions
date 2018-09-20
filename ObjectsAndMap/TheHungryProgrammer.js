function solve(arr,comands) {
    let counter=0;
    for (let comand of comands) {
        let tokens=comand.split(' ')

            switch (tokens[0]){
                case'Serve':console.log(`${arr.pop()} served!`);break;
                case'Eat':
                    counter++
                    console.log(`${arr.shift()} eaten`);break;
                case'Add':
                    arr.unshift(tokens[1]);break;
                case'Consume':
                    if((Number[tokens[1]]>0&&Number[tokens[1]],tokens.length&&Number[tokens[2]]>0&&Number[tokens[2]],tokens.length)){
                        arr.splice(Number(tokens[1]),Number(tokens[2]))
                        counter+=Number(tokens[2])
                        console.log('Burp!')
                    }
                    ;break;
                case'Shift':
                    if((Number[tokens[1]]>0&&Number[tokens[1]],tokens.length&&Number[tokens[2]]>0&&Number[tokens[2]],tokens.length)){
                        let temp=arr[Number(tokens[1])]

                        arr[Number(tokens[1])]=arr[Number(tokens[2])]
                        arr[Number(tokens[2])]=temp

                    }

                    ;break;
                    case'End':
                    if(arr.length>0){
                        console.log( `Meals left: ${arr.join(', ')}`);
                        console.log(`Meals eaten: ${counter}`)
                    }
                    else {
                        console.log(`The food is gone`)
                        console.log(`Meals eaten: ${counter}`)
                    };return

                default:continue
            }


    }

}
solve(['fries','fish', 'beer', 'chicken', 'beer', 'eggs'],
    ['Add spaghetti',
        'Shift 0 1',
        'Consume 1 4',
        'End'])
console.log()
solve(['carrots', 'apple', 'beet'],
    ['Consume 0 2',
        'End',])