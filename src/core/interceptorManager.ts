
interface FullFilledFn<T>{
    (config:T):T | Promise<T>
}
interface RejectedFn{
    (error:any):any
}
 export interface interceptorsManage<T>{
    FullFilledFn:FullFilledFn<T>,
    RejectedFn?:RejectedFn | null
}
export default class InterceptorManagers<T>{
   interceptors:(interceptorsManage<T> | null)[]
    use(FullFilledFn:FullFilledFn<T>,RejectedFn?:RejectedFn):number{
       this.interceptors.push({
        FullFilledFn,
        RejectedFn
       })
      return this.interceptors.length-1
    }
    eject(id:number):void{
        this.interceptors[id]=null
    }
}