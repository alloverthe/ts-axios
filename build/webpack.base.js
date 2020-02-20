const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isDev = process.env.NODE_ENV === "development"

module.exports = {
    entry: path.resolve(__dirname, "../src/index.ts"),
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "js/budlue.[hash:8].js"
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [isDev ? "style-loader" : MiniCssExtractPlugin.loader, {
                    loader: "css-loader",
                    options: {
                        importLoaders: 2
                    }
                }, "less-loader", "sass-loader"]
                //解析css文件中用@import导入的sass文件
            },
            {
               test:/\.tsx?$/,
               use:"ts-loader"
            },
            {
                test: /\.scss$/,
                use: [isDev ? "style-loader" : MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },
            {
                test: /\.less$/,
                use: [isDev ? "style-loader" : MiniCssExtractPlugin.loader, "css-loader", "less-loader"]
            },
            {
                test:/\.(jpe?g|png|svg|gif)$/,
                use:{
                    loader:"url-loader",
                    options:{
                        name:"assets/[contentHash].[ext]",
                        limit:1024*10
                    }
                }
            },
            {
                test:/\.(woff | eot | ttf |svg)/,
                use:"file-loader"
            },
            {
                test:/\js$/,
                use:"babel-loader",
                exclude:/node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../src/index.html"),
            filename:"index.html",
            minify:!isDev && {
                collapseBooleanAttributes:true,
                removeAttributeQuotes:true
            }
        }),
        //将所有的css文件打包成一个文件
        !isDev && new MiniCssExtractPlugin({
            filename: 'css/[name]_[hash:8].css',
            chunkFilename: 'css/chunk/[id].css'
        })
    ].filter(Boolean),
    resolve: {
        extensions: [".js", ".ts", ".tsx"]
    },
    devtool:isDev?"inline-souce-map":false
}