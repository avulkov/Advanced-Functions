function solve(input) {
let result=new Map()
    for (let arr of input) {
        let[system,component,subcomponent]=arr.split(' | ')
        if(!result.has(system)){
            result.set(system,new Map())
            result.get(system).set(component,subcomponent)
        }
        else{
            if(!result.get(system).has(component)){
                result.get(system).set(component,subcomponent)
            }
            else{
               result.get(system).set(component,subcomponent)
            }
        }
        
    }

    console.log(sortedValues);
}
solve(['SULS | Main Site | Home Page'
    ,'SULS | Main Site | Login Page'
    ,'SULS | Main Site | Register Page'
    ,'SULS | Judge Site | Login Page'
    ,'SULS | Judge Site | Submittion Page'
    ,'SULS | Judge Site | Submittion Page'
    ,'SULS | Digital Site | Login Page'
    ,'Lambda | CoreB | B24'
    ,'Lambda | CoreA | A24'
    ,'Lambda | CoreA | A25'
    ,'Lambda | CoreC | C4'
    ,'Indice | Session | Default Storage'
    ,'Indice | Session | Default Security'])