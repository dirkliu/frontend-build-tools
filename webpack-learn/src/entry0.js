var b = require("./b");
require.ensure(["./a","./c"], function(require) {
    require("./b").xyz();
    var d = require("./d");
    var c=require('./c');
    console.log('c:',c);
    console.log('d:',d);
});
