function solve(armies,battles) {
        let kingdooArmies=new Map()
    let generalStats=new Map()
    for (let army of armies) {
        let kingdomName=army.kingdom
        let generalName=army.general
        let count=army.army
        if (!kingdooArmies.has(kingdomName)){
                kingdooArmies.set(kingdomName,new Map())
            kingdooArmies.get(kingdomName).set(generalName,count)
        }
        else{
                if(!kingdooArmies.get(kingdomName).has(generalName)){
                      kingdooArmies.get(kingdomName).set(generalName,count)
                }
                else{
                        kingdooArmies.get(kingdomName).set(generalName,+count)
                }
        }
    }
    for (let battle of battles) {
        let gnrl1=battle[1]
        let gnrl2=battle[3]
        let kng1=battle[0]
        let kng2=battle[2]

        if(kng1!==kng2){
            if(kingdooArmies.get(kng1).get(gnrl1)<kingdooArmies.get(kng2).get(gnrl2)){

                if (!generalStats.has(gnrl2&&!generalStats.has(gnrl1))){
                    generalStats.set(gnrl2,[])
                    generalStats.set(gnrl1,[])

                    generalStats.get(gnrl2)[0]=1
                    generalStats.get(gnrl1[1]=1)
                }
                else {
                    generalStats.get(gnrl2)[0]++
                    generalStats.get(gnrl1[1]++)
                }
            }
            else if(kingdooArmies.get(kng1).get(gnrl1)>kingdooArmies.get(kng2).get(gnrl2)){
                if (!generalStats.has(gnrl1&&generalStats.has(gnrl2))){
                    generalStats.set(gnrl1 ,[])
                    generalStats.set(gnrl2,[])

                    generalStats.get(gnrl1)[0]=1
                    generalStats.get(gnrl2[1]=1)
                }
                else {
                    generalStats.get(gnrl1)[0]++
                    generalStats.get(gnrl2[1]++)
                }
            }

        }
    }
    console.log(generalStats);

}
solve([ { kingdom: "Maiden Way", general: "Merek", army: 5000 },
        { kingdom: "Stonegate", general: "Ulric", army: 4900 },
        { kingdom: "Stonegate", general: "Doran", army: 70000 },
        { kingdom: "YorkenShire", general: "Quinn", army: 0 },
        { kingdom: "YorkenShire", general: "Quinn", army: 2000 },
        { kingdom: "Maiden Way", general: "Berinon", army: 100000 } ],
    [ ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
        ["Stonegate", "Ulric", "Stonegate", "Doran"],
        ["Stonegate", "Doran", "Maiden Way", "Merek"],
        ["Stonegate", "Ulric", "Maiden Way", "Merek"],
        ["Maiden Way", "Berinon", "Stonegate", "Ulric"] ])