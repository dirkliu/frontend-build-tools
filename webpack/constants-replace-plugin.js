function ConstantsReplacePlugin(options){
    this.options=options||{};
}

ConstantsReplacePlugin.prototype.apply = function(compiler) {
    compiler.plugin('done', function() {
        console.log('Welcome,constants-replace-compiler done!');
    });

    compiler.plugin("compilation", function(compilation) {
        console.log('constants-replace,start compilation');


        compilation.plugin('seal', function() {
            console.log('compilation,seal');
        });
        compilation.plugin('normal-module-loader', function(loaderContext, module) {
            //this is where all the modules are loaded
            //one by one, no dependencies are created yet
            console.log('compilation,normal-module-loader');
        });
    });
};

module.exports=ConstantsReplacePlugin;
