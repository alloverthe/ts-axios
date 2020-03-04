import InterceptorManagers from "./core/interceptorManager"
export type Method="get" | "GET" | "POST" | "post" | "put" | "PUT" | "OPTIONS" | "options" | "patch" | "PATCH" | "DELETE" | "delete" | "head" | "HEAD"
export interface AxiosConfig{
    url?:string;
    method?:Method;
    params?:any;
    headers?:any;
    data?:any;
    responseType?:string;
    timeout?:number,
    [propName:string]:any
}
export interface AxiosResponse{
    data:any;
    config:AxiosConfig;
    headers:any;
    status:number;
    statusText:string
    request:XMLHttpRequest;
}
export interface AxiosError{
    code?:number;
    message:string;
    request?:XMLHttpRequest
    config:AxiosConfig
}
//继承通用的泛型为 AxiosResponse promise接口
export interface AxiosPromise extends Promise<AxiosResponse>{

}
//混合接口 实现类型为Axios函数并且具有接口中的属性
export interface AxiosInstance{
  ():AxiosPromise;
  request(config:AxiosConfig):AxiosPromise
  get(url:string,config?:AxiosConfig):AxiosPromise;
  head(url:string,config?:AxiosConfig):AxiosPromise;
  options(url:string,config?:AxiosConfig):AxiosPromise;
  delete(url:string,config?:AxiosConfig):AxiosPromise;
  post(url:string,data?:any,config?:AxiosConfig):AxiosPromise;
  patch(url:string,data?:any,config?:AxiosConfig):AxiosPromise;
  put(url:string,data?:any,config?:AxiosConfig):AxiosPromise;
  inteceptors:{
      request:InterceptorManagers<AxiosConfig>,
      response:InterceptorManagers<AxiosResponse>
  }
}
