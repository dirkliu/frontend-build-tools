/**
 * Created by 7ge on 2016/9/3.
 * webpack 配置文件
 */
module.exports={
    entry:'./entry.js',//项目入口文件，
    output:{
        path:__dirname,
        filename:'bundle.js'
    },
    resolve:{//指定require
        extensions:['','.js','.jsx'] //指定可以被 require 的文件后缀。比如 Hello.jsx 这样的文件就可以直接用 require(./Hello) 引用
    },
    module:{
        loaders:[
            {test:/\.jsx$/,loaders:['jsx?harmony']}
        ]
    }
}
