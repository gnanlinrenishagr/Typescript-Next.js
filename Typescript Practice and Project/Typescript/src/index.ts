let age: number = 21;
age = 98;
console.log(age);

const car: { type: string; model: number } = {
  type: "Ford"
};
car.model=90
console.log(car)

const ageMap:{[index:string]:number}={}
ageMap.Reni=22
ageMap.Div=21
console.log(ageMap)

let list=[1,true,"oi"]
let t=list[0]
console.log(typeof(t))

enum ageof{
  Reni=22,
  Ajin=25,
  Dhiv=22,
  Dev=22,
}
let a=ageof.Ajin
console.log(a)

interface one {
  name:string,
  year:number
}
const prima:one={name:'Reni',year:2023}
interface two {
  dob:Date,
  hobby:string[],
  model:string
  details:one
}
const sec:two={
  dob:new Date,
  hobby:['dance','sing'],
  model:'Ford',
  details:prima
}
function data (post:two) :void{
  console.log("interface==>",post)
}
data(sec)
