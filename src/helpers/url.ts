import {isPlainObject,isDate,encode} from "./utils";
export function buildURL(url:string,params:any):string{
  if(!isPlainObject(params)) return encode(url);  
  const parts:string[]=[];
  Object.keys(params).forEach(key=>{
      const val=params[key];
      if(Array.isArray(val)){
         const values:string[]=[];
         val.forEach(type=>{
            values.push(`${key}[]=${type}`)
         });
         parts.push(values.join("&"))
      }
      if(isDate(val)){
        parts.push(`${key}=${val.toISOString()}`);
      }
      if(isPlainObject(val)){
        parts.push(`${key}=${JSON.stringify(val)}`)
      }
      if(typeof val==="string"){
        parts.push(`${key}=${val}`)
      }
  })
  const result=parts.join("&");
  if(result){
    const hashIndex:number=url.indexOf("#");
    if(hashIndex>-1){
        url=url.slice(0,hashIndex)
    }
    url+=url.indexOf("?")>-1?"&":"?";
    url+=result
  }
  return encode(url);
}