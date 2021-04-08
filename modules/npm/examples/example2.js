/* eslint-disable no-console */
const rastreio = require('rastrearpedidos')
const codigo = 'LB498113226SE'

try {
  //rastreio(codigo).then(console.log)
  rastreio(codigo).then(result => console.log(result))
} catch (err) {
  console.log(err)
}
