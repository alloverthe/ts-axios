
import {isPlainObject} from "./utils";
const ConfigContentType=function(headers:any):void{
  Object.keys(headers).forEach(header=>{
      if(header.toUpperCase()==="CONTENT-TYPE"){
        headers["Content-Type"]=headers[header];
        delete headers[header]
      }
  });
}
export function processHeaders(headers:any,data:any){
    if(isPlainObject(data)){
        if(headers && !headers["Content-Type"]){
         ConfigContentType(headers); 
         if(!headers["Content-Type"]){
            headers["Content-Type"]="application/json;charset=utf-8"
         }
          
        }
    }
    return headers; 
}
export function setRequestHeaders(request:XMLHttpRequest,headers:any):void{
   Object.keys(headers).forEach(header=>{
    request.setRequestHeader(header,headers[header])
   })
}
export function parseResponseHeaders(header:string):any{
  const parsed=Object.create(null);
  if(!header) return parsed;
  const split=header.split("\r\n");
  return split.reduce((memo,current)=>{
     if(current){
      let [key,val]=current.split(":");
      key=key.trim().toLowerCase();
      if(key){
        memo[key]=val?val.trim():val;
      }
     }
     return memo
  },parsed)
}
export function transformResponseData(data:any):any{
    if(typeof data==="string"){
      try{
        data=JSON.parse(data)
      }catch(e){
        //do noting
      }
    }
    return data
}
