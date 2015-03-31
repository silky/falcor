var $error = require("../types/$error");
var promote = require("../lru/promote");
var array_clone = require("./array-clone");
module.exports = function(roots, node, type, path) {
    if(node == null || type != $error || roots.errorsAsValues) {
        return false;
    }
    promote(roots.lru, node);
    roots.errors.push({ path: array_clone(path), value: node.value });
    return true;
};