class GenericNumber<T,S>{
    number:T
    addNum:(x:T,y:T)=>T
    countNum(value:T,v2:S):T{
       return value
    }
}
let p=new GenericNumber()
p.number=1;
p.countNum(1,false);
//返回值类型遵循鸭式变形法;成员少的兼容成员多的
let f=()=>({name:"alice"});
let g=()=>({name:"alice",location:"beijing"});
f=g;
let handler=(v:{a:number,b:number})=>{};
let handler1=(h:{a:number,n:number,c:number})=>{};
