import {AxiosError,AxiosConfig} from "../type";
class AxiosErrors extends Error implements AxiosError {
    constructor(public code:number,message:string,public config:AxiosConfig,public request:XMLHttpRequest){
        super(message);
        // Object.setPrototypeOf(this,AxiosErrors.prototype)
    }
}
//可选参数必须放到末尾位置
export function createError(code:number,message:string,config?:AxiosConfig,request?:XMLHttpRequest):AxiosErrors{
   return new AxiosErrors(code,message,config,request)
}