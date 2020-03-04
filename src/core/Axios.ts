import { AxiosConfig, AxiosPromise,Method, AxiosResponse } from "../type";
import dispatchRequest from "./dispatchRequest";
import InterceptorManagers, { interceptorsManage } from "./interceptorManager";
import defaults from "../defaults";
export default class Axios {
    //会把这个值extend到request对象上面
    public interceptors={
        request:new InterceptorManagers<AxiosConfig>(),
        response:new InterceptorManagers<AxiosResponse>()
    }
    public defaults:AxiosConfig=defaults
    //调用ajax请求
    request(config:AxiosConfig):AxiosPromise{
       const chain:(interceptorsManage<AxiosConfig> | interceptorsManage<AxiosResponse>)[]=[
           {
            FullFilledFn:dispatchRequest,
            RejectedFn:null
           }
       ]
       this.interceptors.request.interceptors.forEach(interceptor=>{
        interceptor && chain.unshift(interceptor)
       })
       this.interceptors.response.interceptors.forEach(interceptor=>{
        interceptor&&chain.push(interceptor)
       });
       //:(Promise<AxiosConfig> | Promise<AxiosResponse>)
       let promiseChain:any=Promise.resolve(config);
       while(chain.length){
           const {FullFilledFn,RejectedFn}= chain.shift();
           promiseChain=promiseChain.then(FullFilledFn,RejectedFn)
       }
       return promiseChain;
    }
    get(url:string,config:AxiosConfig):AxiosPromise{
        return this._dispatchRequestWithNoData("get",url,config);
    }
    delete(url:string,config:AxiosConfig){
        return this._dispatchRequestWithNoData("delete",url,config);
    }
    head(url:string,config:AxiosConfig){
        return this._dispatchRequestWithNoData("head",url,config);
    }
    options(url:string,config:AxiosConfig){
        return this._dispatchRequestWithNoData("options",url,config);
    }
    //post请求系列
    post(url:string,data:any,config:AxiosConfig):AxiosPromise{
        return this._dispatchRequestWithData("post",url,config,data)
    }
    patch(url:string,data:any,config:AxiosConfig):AxiosPromise{
        return this._dispatchRequestWithData("post",url,config,data)
    }
    put(url:string,data:any,config:AxiosConfig):AxiosPromise{
        return this._dispatchRequestWithData("post",url,config,data)
    }
    _dispatchRequestWithNoData(method:Method,url:string,config:AxiosConfig){
     //把url和method合并到config中
     Object.assign(config || {},{
         method,
         url
     })
     return this.request(config);
    }
    _dispatchRequestWithData(method:Method,url:string,config?:AxiosConfig,data?:any){
        config=config || {}
        if(data){
            config.data=data;
        } 
        Object.assign(config||{},{
            method,
            url
        })
        return this.request(config);
    }
}