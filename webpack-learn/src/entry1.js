require.ensure(["./a"], function(require) {
    require("./b").xyz();
    var d = require("./d");
    console.log('d:',d);
});
