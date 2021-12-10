const mexp = require('math-expression-evaluator')
module.exports = function () {
  return 'value from ' + mexp.eval('2+2+3')
}