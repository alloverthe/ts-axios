import Axios from "./core/Axios";
import {AxiosInstance, AxiosConfig} from "./type";
import {_extend} from "./helpers/utils"
function createInstance():AxiosInstance{
    const context=new Axios();
    //修正request方法中的this指向
    const instance=Axios.prototype.request.bind(context);
    _extend(context,instance);
    //需要强制断言为AxiosInstance
    return instance as AxiosInstance;
}
const axios=createInstance();

export default axios