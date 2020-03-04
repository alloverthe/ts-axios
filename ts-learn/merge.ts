interface nameInfos{
    name:string,
    getInfo(text:string):number
}
interface nameInfos{
    age:number,
    getInfo(text:number):string
}
let result:nameInfos={
    name:"kke",
    age:18,
    getInfo(type:any):any{
      if(typeof type==="string"){
          return type.length
      }
      return type.tofixed(2)
    }
}
console.log(result.getInfo(2222));
