var Transformer = require('loop-detection').Transformer

module.exports = function(source, sourceMap) {
  var transformer = new Transformer({
    alias: 'loopDetect',
    file: this.resource,
    code: source,
    sourceMap: sourceMap
  })

  var result = transformer.transform()
  this.callback(null, result.code, result.sourceMap)
}
