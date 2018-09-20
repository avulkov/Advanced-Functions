function solve(arr) {
    let result = ''
    for (let arg of arr) {
        let [command, value] = arg.split(' ')
        switch (command) {
            case 'append':
                result += value;
                break;
            case'removeStart':
                result = result.substring(value);
                break;
            case'removeEnd':
                result = result.substring(0, result.length - value);
                break;
            case'print':
                console.log(result)
        }
    }
}
    solve(['append hello',
    'append again',
    'removeStart 3',
    'removeEnd 4',
    'print'])