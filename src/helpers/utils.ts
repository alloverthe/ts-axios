
const isString=Object.prototype.toString
export function isDate(date:any):boolean{
  return  isString.call(date)==="[object Date]"
}
export function isPlainObject(obj:any):boolean{
    return isString.call(obj)==="[object Object]"
}
export function encode(url:string):string{
  return encodeURIComponent(url)
  .replace(/%2F/g,"/").
  replace(/%3F/g,"?").
  replace(/%3D/g,"=").
  replace(/%26/g,"&").
  replace(/%7B/g,"{")
  .replace(/%3A/g,":").
  replace(/%7D/g,"}").
  replace(/%2C/g,",").
  replace(/%24/g,"&").
  replace(/%40/g,"@").
  replace(/%5B/g,"[").
  replace(/%5D/g,"]").
  replace(/%22/g,"")
}
export function _extend<T,U>(source:T,target:U):T&U{
  for(let key in source){
    (target as T&U)[key]=source[key] as any
  };
  return target as T&U
}
export function oneOf(source:any[],target:any):boolean{
  return source.indexOf(target)>-1
}
