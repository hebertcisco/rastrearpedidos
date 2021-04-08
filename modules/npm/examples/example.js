/* eslint-disable no-console */
const rastreio = require('../lib/index')
const codigo = 'LB498113226SE'

try {
  //rastreio(codigo).then(console.log)
  rastreio(codigo).then(result => console.log(result.length))
} catch (err) {
  console.log(err)
}
