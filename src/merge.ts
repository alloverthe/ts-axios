import { AxiosConfig } from "./type";
import { oneOf } from "./helpers/utils";

//合并策略
//1.timeout;method取优先传入的配置;
//2.url,data,params只取传入的配置

export default function mergeConfig(source:AxiosConfig,target?:AxiosConfig):AxiosConfig{
   const getValFromTarget=["url","data","timeout","params","method"];
   if(!target){
    source={}
   };
   for(let key in source){
       if(oneOf(getValFromTarget,key)){
         target[key]=source[key]
       }
   }
   return target
}