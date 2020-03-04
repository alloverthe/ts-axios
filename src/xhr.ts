import {AxiosConfig} from "./type";
import {setRequestHeaders,parseResponseHeaders,transformResponseData} from "./helpers/headers";
import {AxiosResponse} from "./type";
import {createError} from "./helpers/error"
//AxiosResponse 这个泛型是resolve的type类型
export function xhr(config:AxiosConfig):Promise<AxiosResponse>{
  return new Promise((resolve,reject)=>{
    const {url,method="get",data=null,headers,responseType,timeout}=config;
    let request:XMLHttpRequest=new XMLHttpRequest();
    //url不是不填参数有可能为undefined
    request.open(method.toUpperCase(),url!,false);
    setRequestHeaders(request,headers);
    // string | Document | Blob | ArrayBufferView | ArrayBuffer | FormData | URLSearchParams | ReadableStream<Uint8Array> | null | undefined
    request.send(data);
    request.onreadystatechange=function(){
      const resoponseData=responseType==="text"?request.responseText:request.response;
      const responseHeaders=request.getAllResponseHeaders();
      if(request.timeout){
        request.timeout=timeout;
      }
      if(request.readyState===4){
        const response:AxiosResponse={
          status:request.status,
          statusText:request.statusText,
          data:transformResponseData(resoponseData),
          request,
          headers:parseResponseHeaders(responseHeaders),
          config
        };
      if(request.status>=200 && request.status<=300){
        resolve(response);
      }else{
        reject(createError(null,`failed with status with ${request.status}`))
      }
      request.ontimeout=function(){
        reject(createError(200,`request timeout with time ${request.timeout}ms`,config,request))
      }
      request.onerror=function(){
        reject(createError(null,"netWork Error"))
      }
      }
    }
  })
 
}