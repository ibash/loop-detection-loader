var Transformer = require('loop-detection').Transformer

module.exports = function(source, sourceMap) {
  this.cacheable && this.cacheable()

  var transformer = new Transformer({
    alias: 'loopDetect',
    file: this.resource,
    code: source,
    sourceMap: sourceMap
  })

  var result = transformer.transform()
  this.callback(null, result.code, result.sourceMap)
}
