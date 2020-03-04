import { AxiosConfig,AxiosResponse } from "../type";
import { buildURL } from "../helpers/url";
import { xhr } from "../xhr";
import {processHeaders} from "../helpers/headers";
import {isPlainObject} from "../helpers/utils";
function dispatchRuest(config: AxiosConfig):Promise<AxiosResponse>{
    processConfig(config);
    return xhr(config);
};
function processConfig(config: AxiosConfig): void {
    const { url, params = {},data=null,headers={}} = config
    config.url = buildURL(url!, params);
    config.data=transformData(data);
    config.headers=processHeaders(headers,data);
}
function transformData(data:any):any{
    if(isPlainObject(data)){
      return JSON.stringify(data)
    }
    return data
  }
// axios({
//     url:`/api/server`,
//     data:{
//         name:"likeke"
//     }
// })
export default dispatchRuest;