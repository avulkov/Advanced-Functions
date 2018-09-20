class Stringer {
    constructor(string,length){
        this.innerString=string
        this.innerLength=length
    }
    increase(len){
        return this.innerLength+=len
    }
    decrease(len){

        this.innerLength-=len
        if(this.innerLength>=0){
            return this.innerLength
        }
        else{
            return this.innerLength=0
        }

    }
    toString(){
        if(this.length===0){
            return '...'
        }
        else{
            if(this.innerString.length>this.innerLength){
                let subs=this.innerString.substring(0,this.innerLength)
                return subs+'...'
            }
            else {
                let subs=this.innerString.substring(0,this.innerLength)
                return subs
            }



        }
    }
}
let ob=new Stringer('Viktor',6)
ob.decrease(3)

console.log(ob.toString());

