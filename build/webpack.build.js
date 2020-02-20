const optimizeCss=require("optimize-css-assets-webpack-plugin");
const base=require("./webpack.base");
const merge=require("webpack-merge");
//压缩 js文件
const TerserWebpackPlugin=require("terser-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const build={
    optimization:{
        minimizer:[
            new optimizeCss(),
            new TerserWebpackPlugin()
        ]
    },
    plugins:[
        new CleanWebpackPlugin()
    ]
}
module.exports=merge(base,build);

