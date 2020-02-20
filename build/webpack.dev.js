const base=require("./webpack.base");
const path=require("path");
const merge=require("webpack-merge");
const dev={
    devServer:{
        port:4000,
        contentBase:path.resolve(__dirname,"../dist"),
        host:"localhost"
    }
}
module.exports=merge(base,dev)