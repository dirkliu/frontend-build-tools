function ConstantsReplacePlugin(options){
    this.options=options||{};
}

ConstantsReplacePlugin.prototype.apply = function(compiler) {

    compiler.plugin("compile", function(params) {
        //console.log("The compiler is starting to compile...:");
    });

    compiler.plugin("compilation", function(compilation) {
        //console.log('constants-replace,start compilation:',compilation.assets);

        /*compilation.plugin('seal', function() {
            console.log('compilation,seal');
        });
        compilation.plugin('normal-module-loader', function(loaderContext, module) {
            console.log('compilation,normal-module-loader');
        });*/
    });

    compiler.plugin('emit', function(compilation, callback) {
        console.log('compilier emit',compilation.assets);
        // Create a header string for the generated file:
        var filelist = 'In this build:\n\n';

        // Loop through all compiled assets,
        // adding a new line item for each filename.
        for (var filename in compilation.assets) {
            filelist += ('- '+ filename +'\n');
        }

        // Insert this list into the Webpack build as a new file asset:
        compilation.assets['filelist.md'] = {
            source: function() {
                return filelist;
            },
            size: function() {
                return filelist.length;
            }
        };

        compilation.chunks.forEach(function(chunk){
            console.log('chunk:',chunk);
            //chunk.replace(/__CONSTANT_A/g,'I changed it');
        });

        callback();
    });

    compiler.plugin('done', function() {
        console.log('Welcome,constants-replace-compiler done!');
    });
};

module.exports=ConstantsReplacePlugin;
