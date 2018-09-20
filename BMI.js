function solve() {
let patient={}
        let name=arguments[0]
        let personalInfo={age:arguments[1],weight:arguments[2],height:arguments[3]}
        let BMI=Math.round(personalInfo.weight/Math.pow((personalInfo.height/100),2))
    let status='empty'
    if(BMI<18.5){
    status='underweight'
    }
    else if(BMI>=18.5&&BMI<25){
    status='normal'
    }
    else if(BMI>=25&&BMI<30){
    status='overweight'
    }else{
    status='obese'
    }

    patient.name=name
    patient.personalInfo=personalInfo
    patient.BMI=BMI
    patient.status=status
    if(status==='obese'){
        let recomendation='admission required'
        patient.recommendation=recomendation
    }
   return patient
}

console.log(solve('Peter', 29, 75, 182));
console.log(solve('Honey Boo Boo', 9, 57, 137));
console.log(solve('Peter', 29, 75, 182));