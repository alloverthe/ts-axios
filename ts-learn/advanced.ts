//ts保证在某个区块内调用某个方法
class Java{
    handleJava():void{
     console.log("java")
    }
}
class JavaScript{
    handleJavaScript(){
        console.log("javascript")
    }
}

function checkLanguage(){
    const type=Math.random()>0.5?new Java():new JavaScript();
    //instanceof
    // if(type instanceof Java){
    //  type.handleJava()
    // }
    //in关键字
    // if("handleJava" in type){
    //     type.handleJava()
    // }
   // typeof 类型保护
//    let a:string | number;
//    if(typeof a==="string"){
      //在这个代码块中可以调用string上面的所有方法
//       console.log(a.length)
//    }

}
//索引类型

interface nameInfo{
    name:string,
    age:number
}
let propsName:keyof nameInfo;

function getValue<T,K extends keyof nameInfo>(val:T){
 
}
// k extends nameInfo K必须是一个含有和nameInfo相同的属性名和类型可以多
// k extends keyof nameInfo k是"name" 或者 age;
type numberType=nameInfo["age"];
//获取到的是number类型
interface propType<T>{
    [propName:string]:T
}
let t:keyof propType<number>;
//t的类型是string或者number
//in 属性
interface TypeInfo{
    name:string
    age:number
    sex:string
}
//要用type定义属性
type ReadonlyType<K>={
    readonly [P in keyof K]:P
}