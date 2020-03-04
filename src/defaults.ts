import { AxiosConfig } from "./type";

const defaults:AxiosConfig={
    method:"get",
    timeout:0,
    headers:{
        common:{
            accept:"application/json,text/plain,*/*"
        }
    },
}
const methodWidthNoData=["get","head","delete","options"]
methodWidthNoData.forEach(method=>{
    defaults.headers[method]={}
});
const methodWithData=["post","put","patch"];
methodWidthNoData.forEach(method=>{
    defaults.headers[method]={
        "Content-Type":"appilication/x-www-form-urlencoded"
    }
});
export default defaults