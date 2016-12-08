var fs=require('fs');

function ConstantsReplacePlugin(options){
    this.options=options;
}

ConstantsReplacePlugin.prototype.apply = function(compiler) {
    compiler.plugin('done', function() {

    });
};

module.exports=ConstantsReplacePlugin;
