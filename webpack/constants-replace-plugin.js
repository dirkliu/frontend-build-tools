function ConstantsReplacePlugin(options){
    this.options=options||{};
}

ConstantsReplacePlugin.prototype.apply = function(compiler) {

    compiler.plugin("compile", function(params) {
        //console.log("The compiler is starting to compile...:",params);
    });

    compiler.plugin("compilation", function(compilation) {
        console.log('constants-replace,start compilation:'/*,compilation*/);

        /*compilation.plugin('seal', function() {
            console.log('compilation,seal');
        });
        compilation.plugin('normal-module-loader', function(loaderContext, module) {
            console.log('compilation,normal-module-loader');
        });*/
    });

    compiler.plugin('done', function() {
        console.log('Welcome,constants-replace-compiler done!');
    });
};

module.exports=ConstantsReplacePlugin;
