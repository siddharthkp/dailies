function plugin() {}

plugin.prototype.apply = function(compiler, callback) {
  compiler.hooks.compile.tap('plugin', params => {
    // for (let i = 0; i < 10000000000; i++);
  })
}

module.exports = plugin
