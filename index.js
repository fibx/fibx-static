/**
 * @author Rube
 * @date 15/12/18
 */

var http = require('http');

module.exports = serve;

function serve(root, options) {
    if (options) {

    } else {

        var hdlr = http.fileHandler(root);
        return function(next) {
            var hdlr = http.fileHandler(root);
        }
    }
}
