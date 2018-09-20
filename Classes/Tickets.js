function solve(array,criteria) {
    let result=[]
    class Ticket{
            constructor(destination,price,status){
                this.destination=destination
                this.price=price
                this.status=status
            }
    }

    for (let i = 0; i < array.length; i++) {
        let[destination,price,status]=array[i].split('|')
        let ticket= new Ticket(destination,Number(price),status)
       result.push(ticket)
    }
    let sortedArray=result.sort((a,b)=>a[criteria]>b[criteria])
   return sortedArray
}
solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'status')